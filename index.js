const {
  Collection,
  Client
} = require('discord.js');
const client = new Client({
  disableEveryone: true
});
const disbut = require("discord-buttons");
disbut(client);
module.exports = client;
const Enmap = require("enmap");
const canvacord = require("canvacord");
const fs = require('fs');
const config = require('./config.json');
const prefix = config.prefix;
require('dotenv').config();
const { GiveawaysManager } = require('discord-giveaways');

client.snipes = new Map();



client.giveawaysManager = new GiveawaysManager(client, {
  storage: "./giveaways.json",
  updateCountdownEvery: 5000,
  default: {
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎉"
  }
});

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {
  console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {
  console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`);
});

client.giveawaysManager.on("giveawayEnded", (giveaway, winners) => {
  console.log(`Giveaway #${giveaway.messageID} ended! Winners: ${winners.map((member) => member.user.username).join(', ')}`);
});




client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.TOKEN
);