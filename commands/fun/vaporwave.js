const fetch = require('node-fetch');
const {
  Message,
  MessageEmbed
} = require('discord.js');
const discord = require("discord.js");
const {
  Color
} = require('../../config.json');

module.exports = {
  name: 'vaporwave',
  description: 'Vaporwavefies a text.',
  aliases: 'vw',
  category: '👻Fun',
  run: (client, message, args) => {

    if (!args[0]) return message.channel.send(`whatdoIsay`);

    const vaporwavefied = args.toString().split('').map(char => {
      const code = char.charCodeAt(0)
      return code >= 33 && code <= 126 ? String.fromCharCode((code - 33) + 65281): char
    }).join('').replace(/，/g, '  ')
    const embed = new MessageEmbed()
    .setDescription(vaporwavefied)
    .setColor(Color)
    message.channel.send(embed);
  }
}