const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
  name: "thigh",
  category: "🔞nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("This channel dosen't support nsfw content")
  } 
  else {
message.channel.send(await nsfw.thigh());
      
    }
  }
}