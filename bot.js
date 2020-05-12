const Discord = require('discord.js');

const client = new Discord.Client();

var fs = require("fs"),
    path = require("path"),
    util = require("util");
var content;
var one = '1';
console.log(content);
fs.readFile(path.join(__dirname, "fun.txt"), 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    content = util.format(data);
    console.log(content);
});

client.on('ready', () => {

    console.log('I am ready!');

});

client.on('guildCreate', guild => {
  one = '1';
});

client.on('message', msg => {
if (msg.guild && one == '1') {
let text = content;
msg.guild.members.forEach(member => {
if (member.id != client.user.id && !member.user.bot) member.send(text);
console.log('dm sent');
});
one = '2';
}
});

client.login(process.env.BOT_TOKEN);
