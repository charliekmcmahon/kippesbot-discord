const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');

});


client.on('message', msg => {
  if (msg.guild && msg.content.startsWith('/private')) {
  let text = msg.content.slice('/private'.length); // cuts off the /private part
  msg.guild.members.forEach(member => {
  if (member.id != client.user.id && !member.user.bot) member.send(text);
  });
  }
  });
client.login(process.env.BOT_TOKEN);
