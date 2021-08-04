<h1 align="center">
 <br>
  <a href="https://github.com/Frazix12"><img src="https://cdn.discordapp.com/attachments/859145282536996874/869800860585185370/36e5450a6f55402583ee80928849fe62.png"></a>
  <br>
  NOVA the Discord Bot
  <br>
</h1>

<h3 align=center>A fully customizable bot built with 60+ commands, 6 categories and a dashboard!</h3>


<div align=center>

 <a href="https://github.com/mongodb/mongo">
    <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white" alt="mongo">
  </a>
  
  <a href="https://github.com/discordjs">
    <img src="https://img.shields.io/badge/discord.js-v12.5.3-blue.svg?logo=npm" alt="discordjs">
  </a>


</div>

<p align="center">
  <a href="#about">About</a>
  •
  <a href="#features">Features</a>
  •
  <a href="#installation">Installation</a>
  •
  <a href="#setting-up">Setting Up</a>
  •
  <a href="#license">License</a>
</p>

## About

NOVA is a discord bot that took over 6 months of work to make. I decided to make the bot open sourced to whoever wants to run a copy in their server! You can click [this](https://discord.com/api/oauth2/authorize?client_id=843357825878196255&permissions=8&scope=bot) link to invite the official Bot!

If you liked this repository, feel free to leave a star ⭐ and follow me, it actually means a lot.

## Features

**60+** commands and **6** different categories!

  * **Fun**
  * **Giveaway**
  * **Image**
  * **Info**
  * **Mod**
  * **Nsfw**


## Installation

First clone the repo:
```
git clone https://github.com/Frazix-gamers/NOVA.git
```
After cloning, run an
```
npm install
```


## Setting Up

Your `config.json` should look like this:
```
{
  "prefix": "!",
  "owner": "OWNER id",
  "id": "BOT ID",
  "Color": "0xffffff",
  "invite": "INVITE LINK",
  "AME_API": "bb03f373caa534fcfcbaeae177a65134f44a6e57ba7a7b098be273867b376d8a677ddae3c23c6ded4fec8288573945e8c3483689deb13f229376ad4b5b60231d",
  "web": {
    "port": "3000"
  },
  "Giveaway_Options": {
    "giveawayManagerID": "",
    "giveawayRoleID": "",
    "giveawayMention": true,
    "showMention": true,
    "hostedBy": true
  }
}
```


Your `.env` file should be:
```
TOKEN=BOT_TOKEN
```

You can launch the bot with `node index.js` 

**Important Note:** Pogy has so many bugs and requires a lot of js knowledge. You will have some difficulty running the bot if you have no experience in discord.js. 


## License

Released under the [Apache License](http://www.apache.org/licenses/LICENSE-2.0) license.
