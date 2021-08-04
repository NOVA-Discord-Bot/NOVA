const Discord = require("discord.js");
const {
  MessageEmbed
} = require("discord.js");
const {
  Color
} = require("../../config.json");
const fetch = require("node-fetch");

module.exports = {
  name: "meme",
  category: '👻Fun',
  aliases: [],
  description: "Send A Meme!",
  run: async (client, message, args) => {
    //Start
    message.delete();
    fetch("https://meme-api.herokuapp.com/gimme")
    .then(res => res.json())
    .then(json => {
      let embed = new MessageEmbed()
      .setColor(Color)
      .setTitle(`${json.title}`)
      .setURL(json.postLink)
      .setImage(json.url)
      .setFooter(`From /r/${json.subreddit}`);

      message.channel.send(embed);
    });

    //End
  }
};