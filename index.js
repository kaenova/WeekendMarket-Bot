const Discord = require('discord.js');
const client = new Discord.Client();
const ev = require('dotenv').config().parsed
const schedule = require('node-schedule');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

const job = schedule.scheduleJob('1 * * * * *', () => {
    const channel_percobaan = client.guilds.cache.get(ev['ID_Guild']).channels.cache.get(ev['ID_Text_Channel'])
    channel_percobaan.overwritePermissions([{
        id: ev['ID_Role'],
        deny: ['VIEW_CHANNEL']
    }]).then(() => {
        channel_percobaan.send(' Weekend Market Ditutup!')
        console.log('Weekend Market ditutup sekarang!')
    })
});

const job2 = schedule.scheduleJob('31 * * * * *', () => {
    const channel_percobaan = client.guilds.cache.get(ev['ID_Guild']).channels.cache.get(ev['ID_Text_Channel'])
    channel_percobaan.overwritePermissions([{
        id: ev['ID_Role'],
        allow: ['VIEW_CHANNEL']
    }]).then(() => {
        channel_percobaan.send('@everyone \n 🎪 Weekend Market Dibuka! 🎪')
        console.log('Weekend Market dibuka sekarang!')
    })
});

client.login(ev['TOKEN']);