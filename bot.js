const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("571117757400088577")
setInterval(function() {
channel.send(`Spamm 1`);
}, 30)
})

client.login(process.env.BOT_TOKEN);