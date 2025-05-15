import config from '../config.cjs';

const promoteall = async (m, gss) => {
  try {
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

    if (!['promoteall'].includes(cmd)) return;
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

    const toPromote = participants
      .filter(p => !p.admin)
      .map(p => p.id)
      .filter(id =>
        id !== botNumber
      );

    if (toPromote.length === 0) return m.reply("✅ No users to promote");

    await gss.groupParticipantsUpdate(m.from, toPromote, 'promote');
    const mentions = toPromote.map(user => `@${user.split('@')[0]}`).join(' ');
    m.reply(`*THE FOLLOWING MEMBERS HAVE BEEN PROMOTED TO ADMIN:*\n${mentions}`, undefined, { mentions: toPromote });

  } catch (err) {
    console.error(err);
    m.reply("❌ Error while processing promoteall.");
  }
};

export default promoteall;
