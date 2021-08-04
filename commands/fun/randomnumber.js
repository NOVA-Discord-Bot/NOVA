const Discord = require("discord.js");
const {
  MessageEmbed
} = require("discord.js");
const {
  Color
} = require("../../config.json");

module.exports = {
  name: "randomnumber",
  aliases: ["rn"],
  category: "👻Fun",
  description: "Get Random Number!",
  run: async (client, message, args) => {
    //Start
    message.delete();
    let result = Math.floor(Math.random() * 101);

    const embed = new MessageEmbed()
    .setColor(Color)
    .setTitle(`Random Number Is`)
    .setDescription([result])
    .setFooter(`1 - 100`)
    .setTimestamp();

    message.channel.send(embed);

    //End
  }
};