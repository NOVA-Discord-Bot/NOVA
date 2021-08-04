const {
  Message
} = require('discord.js')

module.exports = {
  name: 'unmute',
  category: "🚫Mod",
  usage: "<member id>",
  /**
  * @param {Message} message
  */
  run: async(client, message, args) => {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')

    if (!Member) return message.channel.send('Member not found')

    const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

    await Member.roles.remove(role)

    message.channel.send(`${Member.displayName} is now unmuted`)
  }
}