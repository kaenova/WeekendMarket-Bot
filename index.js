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

const job_close = schedule.scheduleJob({
    dayOfWeek: 1,
    hour: 0,
    minute: 0,
    second: 1
}, () => {
    const channel_percobaan = client.guilds.cache.get(ev['ID_Guild']).channels.cache.get(ev['ID_Text_Channel'])
    channel_percobaan.overwritePermissions([{
        id: ev['ID_Role'],
        deny: ['VIEW_CHANNEL']
    }]).then(() => {
        channel_percobaan.send('Weekend Market Ditutup!')
        console.log('Weekend Market ditutup sekarang!')
    })
});

const job_open = schedule.scheduleJob({
    dayOfWeek: 6,
    hour: 0,
    minute: 0,
    second: 1
}, () => {
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