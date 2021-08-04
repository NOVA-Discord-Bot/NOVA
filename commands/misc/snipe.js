const Discord = require('discord.js')
const config = require('../../config.json')
module.exports = {
        name: 'snipe',
        aliases: ['snipe'],
        description: 'Shows the latest Deleted Message.',
        category: '✨Misc',
    run: async(client, message) => {

       const msg = client.snipes.get(message.channel.id)
       const embedn = new Discord.MessageEmbed()
           .setAuthor(message.guild.name, message.guild.iconURL())
           .setColor(config.Color)
           .setFooter(client.user.username, client.user.avatarURL())
           .setDescription(`<@${message.author.id}> **There is no deleted messages.**`)
           .setTimestamp();
       if(!msg) return message.channel.send(embedn)

       const embed = new Discord.MessageEmbed()
     
       if(msg.content)
       
       embed.addField('Content Of the Message :', msg.content)
       .setAuthor(msg.author, msg.authorimg)
       .setColor(config.Color)
       .setFooter(" Requested by " + message.author.tag , message.author.avatarURL())
       .setTimestamp()

       if(msg.image)
       embed.setImage(msg.image)
       .setColor(config.Color)
       .setDescription(`**Content of the message:**`)
       .setAuthor(msg.author, msg.authorimg)

       message.channel.send(embed)
    }
}