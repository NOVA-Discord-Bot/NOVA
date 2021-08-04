const {
  Color
} = require("../../config.json"), Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "panda",
  aliases: ["pandaa"],
  category: "📷Image",
  description: "Return A Random Panda!",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimalImage({
      Animal: "panda", Color: Color
    });
    return message.channel.send(Data);
  }
};