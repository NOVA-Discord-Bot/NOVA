const discord = require("discord.js");
const config = require("../../config.json");

module.exports = {
        name: 'google',
        description: 'Search google',
        aliases: ["google"],
        usage: 'google',
        category: '👻Fun',
    run: async (bot, message, args) => {
 
  if (!message.content.startsWith(config.prefix)) return;

      const sentence = args.join("+")
       let sntnce = message.content.split(' ');
    sntnce.shift();
    sntnce = sntnce.join(' ');
    if (!sentence) return message.reply('**Please specify a search query.**');
     let embed = new discord.MessageEmbed()
      .setTitle('**You Searched Google**')
      .setDescription(
        `**Your Search Query:** ${sntnce}\n\n **Search Result** - [Click Here](https://www.google.com/search?q=${sentence}&oq=${sentence}&aqs=chrome.0.69i59l2j0l2j69i60j69i61l2j69i65.1147j0j7&sourceid=chrome&ie=UTF-8)`
      )
      .setColor('GREEN')
      .setFooter('NOVA');
    message.channel.send(embed);
  }
}