const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {

    console.log('I am ready!');

});


client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('!slap')) {
    const user = message.mentions.users.first();
    const msgAuthor = message.author;
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .send(`:O You just got slapped by ${msgAuthor.username}`)
          .then(() => {
            message.reply(`Successfully slapped ${user.tag}`);
          })
          .catch(err => {
            message.reply('Oi. That would be self harm.');
            console.error(err);
          });
      } else {
        message.reply("Weird error. Please message Macca#5264");
      }
    } else {
      message.reply("You didn't mention the user to slap!");
    }
  }
});
client.login(process.env.BOT_TOKEN);
