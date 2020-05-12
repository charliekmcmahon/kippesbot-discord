const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');

});


client.on('message', message => {

  const filter = (reaction, user) => {
    return reaction.emoji.name === '👌' && user.id === message.author.id;
  };
  
  const collector = message.createReactionCollector(filter, { time: 15000 });
  
  collector.on('collect', (reaction, user) => {
    console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
  });
  
  collector.on('end', collected => {
    message.reply('working');
  });


});
client.login(process.env.BOT_TOKEN);
