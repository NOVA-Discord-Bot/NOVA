const {
  MessageEmbed
} = require('discord.js');
const {
  Color
} = require('../../config.json');

module.exports = {
  name: 'servericon',
  category: "🔰Info",
  aliases: ["sicon"],
  description: 'Display\'s the current Server Icon',
  run: async (client, message, args) => {

    const embed = new MessageEmbed()
    .setImage(message.guild.iconURL({
      dynamic: true, size: 512
    }))
    .setFooter(message.author.tag, message.author.displayAvatarURL({
      dynamic: true
    }))
    .setTimestamp()
    .setColor(Color);
    message.channel.send(embed);

  }
};