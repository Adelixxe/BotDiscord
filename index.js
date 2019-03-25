const Discord = require('discord.js');
const bot = new Discord.Client();

var cli = new Discord.Client({autoReconnect:true});
var maximum = 0;
var check = false;
bot.commands = new Discord.Collection();
bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));
bot.on('ready', function() {
    console.log("Le JDR peut commencer! ")
});

bot.on('ready', () => {
    bot.user.setPresence({game: {name: "Jeu de Rôle @Adelixxe", type: 0}});
});

bot.on('message', message => {
    if ((message.content === "!jdes") && (check === false) ) {
        message.channel.send("Quel type de dès veux tu jeter ? (3,4,6,8,10,12,16,20,24,30,100)")
        .then(() => {
            message.channel.awaitMessages(() => true, {
                max: 1,
                time: 30000,
                errors: ['time'],
            })

            .then((collected) => {
                check = true
                maximum = collected.first().content

            .catch(() => {
                message.channel.send("Trop tard.");
                check = false
            })
            });
      });
        if(check = true){      
            j = Math.floor(Math.random() * 11);
            if (j % 2 == 0) {
                i = Math.floor((Math.random() * maximum) + 1);
                console.log(i);              
            message.channel.send("https://media3.giphy.com/media/1O1Xww2UM0VMhROihc/giphy.gif?cid=3640f6095c9812507957636a2e884db8")
            message.reply([i])
            maximum = 0
            check = false
                } 
            } 
        }           
    })








bot.login(process.env.BOT_TOKEN);