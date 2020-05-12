const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');

});


client.on('message', message => {

  const filter = (reaction, user) => {
    return reaction.emoji.name === '👌' && user.id === message.author.id;
  };
  
  message.awaitReactions(filter, { max: 4, time: 60000, errors: ['time'] })
    .then(collected => console.log(collected.size))
    .catch(collected => {
      console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
    });

});
client.login(process.env.BOT_TOKEN);
