import config from '../config.cjs';

const kickAllFast = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    if (cmd !== 'kickall') return;

    if (!m.isGroup) return m.reply("*📛 THIS COMMAND CAN ONLY BE USED IN GROUPS*");

    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;
    const botAdmin = participants.find(p => p.id === botNumber)?.admin;
    const senderAdmin = participants.find(p => p.id === m.sender)?.admin;

    if (!botAdmin) return m.reply("*📛 BOT MUST BE AN ADMIN TO USE THIS COMMAND*");
    if (!senderAdmin) return m.reply("*📛 YOU MUST BE AN ADMIN TO USE THIS COMMAND*");

    const toKick = participants
      .filter(p => p.id !== botNumber && !p.admin)
      .map(p => p.id);

    if (toKick.length === 0) return m.reply("No non-admins to kick.");

    // Kick everyone at once (bulk)
    await gss.groupParticipantsUpdate(m.from, toKick, 'remove');

    m.reply(`*✅ ${toKick.length} MEMBERS KICKED FROM ${groupMetadata.subject} IN 1 SECOND*`);

  } catch (err) {
    console.error('Error in kickall-fast:', err);
    m.reply('An error occurred while kicking members.');
  }
};

export default kickAllFast;
