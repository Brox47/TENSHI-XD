import config from '../config.cjs';

const demoteall = async (m, gss) => {
  try {
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    if (!['demoteall'].includes(cmd)) return;

    if (!m.isGroup) return m.reply("🚫 THIS COMMAND CAN ONLY BE USED IN GROUPS");

    const groupMetadata = await gss.groupMetadata(m.from);
    const participants = groupMetadata.participants;
    const botNumber = await gss.decodeJid(gss.user.id);
    const botAdmin = participants.find(p => p.id === botNumber)?.admin;
    const senderAdmin = participants.find(p => p.id === m.sender)?.admin;

    const senderIsSudo = process.env.SUDO?.split(',').includes(m.sender);
    const senderIsOwner = m.sender.includes(config.OWNER_NUMBER);

    if (!botAdmin) return m.reply("🚫 BOT MUST BE ADMIN TO EXECUTE THIS");
    if (!senderAdmin && !senderIsSudo && !senderIsOwner)
      return m.reply("🚫 ONLY ADMINS OR SUDO/OWNER CAN USE THIS");

    const toDemote = participants
      .filter(p => p.admin === 'admin' || p.admin === 'superadmin')
      .map(p => p.id)
      .filter(id =>
        id !== botNumber &&
        !id.includes(config.OWNER_NUMBER) &&
        !process.env.SUDO?.split(',').includes(id)
      );

    if (toDemote.length === 0) return m.reply("✅ No users to demote");

    await gss.groupParticipantsUpdate(m.from, toDemote, 'demote');
    const mentions = toDemote.map(user => `@${user.split('@')[0]}`).join(' ');
    m.reply(`*THE FOLLOWING ADMINS HAVE BEEN DEMOTED:*\n${mentions}`, undefined, { mentions: toDemote });

  } catch (err) {
    console.error(err);
    m.reply("❌ Error while processing demoteall.");
  }
};

export default demoteall;
