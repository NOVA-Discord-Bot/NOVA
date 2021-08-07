const client = require('../index')
const fetch = require('node-fetch')
const chatbotChannelId = '873051880849276948';

client.on("message", async msg => {
if(msg.channel.id === chatbotChannelId){
if(msg.author.bot) return;
msg.channel.startTyping();
const { message } = await fetch(`https://api.udit.gq/api/chatbot?message=${msg.content}[&name=${client.user.username}&user=${msg.author.id}&gender=boy]`).then(response => response.json());
msg.channel.send(message)
msg.channel.stopTyping();
}});