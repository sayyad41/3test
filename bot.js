const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("571128821823045632")
setInterval(function() {
channel.send(`Spamm 3`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
