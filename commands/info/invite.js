const discord = require("discord.js");
const {
  Color,
  id
} = require('../../config.json')
module.exports = {
  name: "invite",
  category: "🔰Info",
  description: "INVITE YOUR BOT.",
  run: async (client, message, args) => {

    let embed = new discord.MessageEmbed()
    .setTitle(`HERE INVITE LINK OF BOT`)
    .setDescription(`<:link:845315257430048788>  [CLICK HERE](https://discord.com/api/oauth2/authorize?client_id=${id}&permissions=8&scope=bot)`)
    .setColor(Color)
    .setTimestamp(message.timestamp = Date.now())

    message.channel.send(embed)


  }
}