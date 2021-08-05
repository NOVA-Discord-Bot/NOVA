const Discord = require("discord.js");
const config = require("../../config.json");
const snekfetch = require('snekfetch')

module.exports = {
        name: 'roblox',
        description: 'Shows your roblox avatar',
        aliases: ["roblox"],
        usage: 'roblox',
        category: '🔰Info',
    run: async (bot, message, args) => {
    if(!message.content.startsWith(config.prefix)) return;
   let saybot = args.join('_');
        const url = `https://api.roblox.com/users/get-by-username?username=${saybot}`;
        snekfetch.get(url).then(result => {
              const data = result.body.Id;
              if (saybot.length < 1) return message.channel.send("**Need to provide a username to use this command**")
              if (result.body.Id === "undefined") return message.channel.send("**Couldn't find a roblox user by the name of **" + saybot)
              const url2 = `https://api.roblox.com/ownership/hasasset?userId=${data}&assetId=102611803`;
              snekfetch.get(url2).then(a => {
                const Verifiedcheck = a.body
                  const embed = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTitle(saybot + "'s Avatar'")
                  .setImage("http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=" + saybot);
                  message.channel.send({embed}).catch(console.error);
                })
            }) 
    }
}