const { readdirSync } = require("fs");

function getCommands() {
  let categories = [];
  const value = [];
  
  readdirSync(`./commands/`).forEach((dir) => {
    const directories = readdirSync(`./commands/${dir}`).filter((file) => file.endsWith(".js"))
    
    const commands = directories.map((command) => {
      const file = require(`../commands/${dir}/${command}`)
      
value.push({
name: file.name ? file.name : 'no command name',
description: file.description ? file.description : 'no command description',
aliases: file.aliases ? file.aliases : 'no command aliases',
usage: file.usage ? file.usage : 'no command usage',
      
      
    })
  });
  
  let data = new Object();
  
  data = {
    name: dir.toUpperCase(),
    value,
  };
  categories.push(data);
  })
  return categories;
}

module.exports = { getCommands }