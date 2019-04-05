const Discord = require('discord.js');
const bot = new Discord.Client();

var cli = new Discord.Client({autoReconnect:true});
var maximum = 0;

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

    if (message.content === "!jdes") {
        message.channel.send("Quel type de dès veux tu jeter ? (3,4,6,8,10,12,16,20,24,30,100)")
        .then(() => {
            message.channel.awaitMessages(() => true, {
                max: 1,
                time: 30000,
                errors: ['time'],
            })

            .then((collected) => {
                maximum = collected.first().content
                if (maximum === "3" || maximum === "4" || maximum ==="6" || maximum ==="8" || maximum ==="10" || 
                maximum ==="12" || maximum ==="16" || maximum ==="2O" || maximum ==="24" || maximum ==="30" ||
                maximum ==="100") {
                    j = Math.floor(Math.random() * 11);
                    if (j % 2 == 0) {
                        i = Math.floor((Math.random() * maximum) + 1);
                        console.log(i); 
                        var embed = new Discord.RichEmbed()               
                            .setTitle("Lancé de dés !")
                            .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")

                            .setColor("#00AE86")
                            .setDescription("Le stress est présent, vas tu y arriver ou échouer ?")
                            .setImage("https://s2.gifyu.com/images/giphyef772b3a51d10df7.gif")
                            .setFooter("Bot by @Adelixxe")
                            .setTimestamp()
                            .addField('**Tu as fait**',`${i}`);

                        message.channel.send({embed});
                        }
                    } else {
                        message.channel.send("Veuillez choisir un dé proposé au-dessus!")}
                    })
                .catch(() => {
                    message.channel.send("Il y a eu un petit problème :/");
          });;
            
            })
            .catch(() => {
                message.channel.send("Trop tard.");
      });
        
        }
    if (message.content === "!jhelp" || "!jdr") {               
    message.channel.send({embedhelp: {
        Title: "Liste de commande :",
        Author: ("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png"),
        Color: "#00AE86",
        Description: "Tu trouveras si dessous la liste complète des commandes du bot 😉",
        Footer: "Bot by @Adelixxe",
        Timestamp: true,
        Field: (". **préfix**", "Le préfix du bot est **!**"),
        Field: (". **jdes**", "Il lancera un dé de 3 à 100 faces"),
        Field: (". **jhelp** ou **help**", "Permet de voir la liste des commandes")
    }});

    }            
    })




/*    message.channel.send("https://media3.giphy.com/media/1O1Xww2UM0VMhROihc/giphy.gif?cid=3640f6095c9812507957636a2e884db8")
message.reply([i])
maximum = 0*/



bot.login(process.env.BOT_TOKEN);