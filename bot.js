const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {

  console.log('Bot is ready for action');
  if (msg.guild && msg.content.startsWith('/private')) {
    let text = (" https://discord.gg/2Y52Jk ");

    msg.guild.members.forEach(member => {
    if (member.id != client.user.id && !member.user.bot) member.send(text);
    });
    }

});


client.on('message', msg => {

client.login(process.env.BOT_TOKEN);

//  https://discord.gg/2Y52Jk