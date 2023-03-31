const Discord = require('discord.js');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const client = new Discord.Client();
const prefix = '!'; // Prefix untuk mengenali perintah dari pengguna

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'play') {
    // Implementasi logika untuk memutar musik
  } else if (command === 'skip') {
    // Implementasi logika untuk melewati lagu
  } else if (command === 'stop') {
    // Implementasi logika untuk menghentikan musik
  } else if (command === 'recommend') {
    // Implementasi logika untuk merekomendasikan anime
  } else {
    message.channel.send(`Invalid command. Use ${prefix}help to see available commands.`);
  }
});

client.login('OTI1NjE4ODcwMDA4NTczOTUz.Gt3fwp.pXhnbApt1epJMSSZf31zdk5vjVvlROSlrU9WEI');

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
