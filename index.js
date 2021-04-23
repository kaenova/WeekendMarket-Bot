const Discord = require('discord.js');
const client = new Discord.Client();

//Passing env for docker, if its run on docker, use the process environment
if (process.env.TOKEN == undefined) {
    var ev = require('dotenv').config().parsed
} else {
    var ev = {
        TOKEN: process.env.TOKEN,
        ID_Guild: process.env.ID_Guild,
        ID_Text_Channel: process.env.ID_Text_Channel,
        ID_Role: process.env.ID_Role,
        ID_Text_Channel_MOD: process.env.ID_Text_Channel_MOD
    }
}

const schedule = require('node-schedule');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const pesan = msg.content;
    var kata = pesan.split(' ')
    if (msg.channel.id == ev['ID_Text_Channel_MOD'] && kata[0] == 'kirim'){
        var kata_kirim = ''
        for (var i = 1; i < kata.length ; i++){
            kata_kirim = kata_kirim + kata[i] + ' '
        }
        try {
            const channel_percobaan = client.guilds.cache.get(ev['ID_Guild']).channels.cache.get(ev['ID_Text_Channel'])
            channel_percobaan.send(kata_kirim)
        } catch (err){
        }
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
    hour: 6,
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