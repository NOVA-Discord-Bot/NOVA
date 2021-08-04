
const client = require("../index");
const config = require('../config.json')
const prefix = config.prefix

const { getCommands } = require('../utils/index')

client.on('ready', () => {
    client.user.setActivity(`${prefix}help`)
console.log(`logdin as ${client.user.username} ✅`)

const express = require('express')
const app = express()
const path = require('path')

const config = require('../config.json')
const port = config.web.port;
const ejs = require('ejs')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
  res.render('index', 
  { 
  bot: config,
  name: client.user.username,
  avatar: client.user.avatarURL
  (),
  guild: client.guilds.cache.size
  })
})

app.get('/commands', (req, res) =>
{
  const commands = getCommands()
  res.render('commands', 
  { 
  bot: config,
  name: client.user.username,
  avatar: client.user.avatarURL
  (),
  guild: client.guilds.cache.size,
  commands: commands
  })
})

app.listen(port, () => {
  console.log(`The app listening at port ${port}`)
})
  
})