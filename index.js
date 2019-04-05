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
    var prefix = '!'
    if (message.content.startsWith(`${prefix}jdes`)) {
        message.channel.send("Quel type de dès veux tu jeter ? (3,4,6,8,10,12,16,20,24,30,100)")
        .then(() => {
            message.channel.awaitMessages(() => true, {
                max: 1,
                time: 30000,
                errors: ['time'],
            })
            .then((collected) => {
                maximum = collected.first().content
                if ((maximum === "3" || maximum === "4" || maximum ==="6" || maximum ==="8" || maximum ==="10" || 
                maximum ==="12" || maximum ==="16" || maximum ==="2O" || maximum ==="24" || maximum ==="30" ||
                maximum ==="100")&&((message.guild.roles.find(role => role.name === "ORANGE")))) {
                    i = Math.floor((Math.random() * maximum) + 1);
                    console.log(i); 
                        var embed = new Discord.RichEmbed()               
                            .setTitle("Lancé de dés !")
                            .setColor("#f58e00")
                            .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                            .setDescription("Le stress est présent, vas tu y arriver ou échouer ?")
                            .setImage("https://s2.gifyu.com/images/giphyef772b3a51d10df7.gif")
                            .setFooter("Bot by @Adelixxe")
                            .setTimestamp()
                            .addField('**Tu as fait**',`${i}`)
                            message.channel.send({embed});
                        }
                if ((maximum === "3" || maximum === "4" || maximum ==="6" || maximum ==="8" || maximum ==="10" || 
                maximum ==="12" || maximum ==="16" || maximum ==="2O" || maximum ==="24" || maximum ==="30" ||
                maximum ==="100")&&((message.guild.roles.find(role => role.name === "ROSE")))) {
                    i = Math.floor((Math.random() * maximum) + 1);
                    console.log(i); 
                        var embed = new Discord.RichEmbed()               
                            .setTitle("Lancé de dés !")
                            .setColor("#ff00ab")
                            .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                            .setDescription("Le stress est présent, vas tu y arriver ou échouer ?")
                            .setImage("https://s2.gifyu.com/images/giphyef772b3a51d10df7.gif")
                            .setFooter("Bot by @Adelixxe")
                            .setTimestamp()
                            .addField('**Tu as fait**',`${i}`)
                            message.channel.send({embed});
                        }
                if ((maximum === "3" || maximum === "4" || maximum ==="6" || maximum ==="8" || maximum ==="10" || 
                maximum ==="12" || maximum ==="16" || maximum ==="2O" || maximum ==="24" || maximum ==="30" ||
                maximum ==="100")&&((message.guild.roles.find(role => role.name === "VERT BLEU")))) {
                    i = Math.floor((Math.random() * maximum) + 1);
                    console.log(i); 
                        var embed = new Discord.RichEmbed()               
                            .setTitle("Lancé de dés !")
                            .setColor("#235860")
                            .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                            .setDescription("Le stress est présent, vas tu y arriver ou échouer ?")
                            .setImage("https://s2.gifyu.com/images/giphyef772b3a51d10df7.gif")
                            .setFooter("Bot by @Adelixxe")
                            .setTimestamp()
                            .addField('**Tu as fait**',`${i}`)
                            message.channel.send({embed});
                        }
                if ((maximum === "3" || maximum === "4" || maximum ==="6" || maximum ==="8" || maximum ==="10" || 
                maximum ==="12" || maximum ==="16" || maximum ==="2O" || maximum ==="24" || maximum ==="30" ||
                maximum ==="100")&&((message.guild.roles.find(role => role.name === "CYAN")))) {
                    i = Math.floor((Math.random() * maximum) + 1);
                    console.log(i); 
                        var embed = new Discord.RichEmbed()               
                            .setTitle("Lancé de dés !")
                            .setColor("#235860")
                            .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                            .setDescription("Le stress est présent, vas tu y arriver ou échouer ?")
                            .setImage("https://s2.gifyu.com/images/giphyef772b3a51d10df7.gif")
                            .setFooter("Bot by @Adelixxe")
                            .setTimestamp()
                            .addField('**Tu as fait**',`${i}`)
                            message.channel.send({embed});
                        }
                if ((maximum === "3" || maximum === "4" || maximum ==="6" || maximum ==="8" || maximum ==="10" || 
                maximum ==="12" || maximum ==="16" || maximum ==="2O" || maximum ==="24" || maximum ==="30" ||
                maximum ==="100")&&((message.guild.roles.find(role => role.name === "VIOLET")))) {
                    i = Math.floor((Math.random() * maximum) + 1);
                    console.log(i); 
                        var embed = new Discord.RichEmbed()               
                            .setTitle("Lancé de dés !")
                            .setColor("#8b00d3")
                            .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                            .setDescription("Le stress est présent, vas tu y arriver ou échouer ?")
                            .setImage("https://s2.gifyu.com/images/giphyef772b3a51d10df7.gif")
                            .setFooter("Bot by @Adelixxe")
                            .setTimestamp()
                            .addField('**Tu as fait**',`${i}`)
                            message.channel.send({embed});
                        }
                    })
                .catch(() => {
                    message.channel.send("Il y a eu un petit problème :/");
          });;
            
            })
            .catch(() => {
                message.channel.send("Trop tard.");
      });
        
        }
        
    if ((message.content.startsWith(`${prefix}jhelp`))&&(message.guild.roles.find(role => role.name === "ORANGE"))) {
            var embed = new Discord.RichEmbed()               
                .setTitle("Liste des commandes :")
                .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
                .setColor("#f58e00")
                .setDescription("Tu trouveras si dessous la liste complète des commandes du bot 😉")
                .setFooter("Bot by @Adelixxe")
                .setTimestamp()
                .addField(". **!jdes**", "pour lancer un dé de 3 à 100 faces")
                .addField(". **!jhelp**", "pour voir la liste des commandes");
                message.channel.send({embed});
            }

    if((message.content.startsWith(`${prefix}jhelp`))&&(message.guild.roles.find(role => role.name === "ROSE"))){
            var embed = new Discord.RichEmbed()               
                .setTitle("Lancé de dés !")
                .setColor("#ff00ab")
                .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                .setDescription("Tu trouveras si dessous la liste complète des commandes du bot 😉")
                .setFooter("Bot by @Adelixxe")
                .setTimestamp()
                .addField(". **!jdes**", "pour lancer un dé de 3 à 100 faces")
                .addField(". **!jhelp**", "pour voir la liste des commandes");
                message.channel.send({embed});
            }

    if((message.content.startsWith(`${prefix}jhelp`))&&(message.guild.roles.find(role => role.name === "VERT BLEU"))){
            var embed = new Discord.RichEmbed()               
                .setTitle("Lancé de dés !")
                .setColor("#235860")
                .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                .setDescription("Tu trouveras si dessous la liste complète des commandes du bot 😉")
                .setFooter("Bot by @Adelixxe")
                .setTimestamp()
                .addField(". **!jdes**", "pour lancer un dé de 3 à 100 faces")
                .addField(". **!jhelp**", "pour voir la liste des commandes");
                message.channel.send({embed});
            }

    if((message.content.startsWith(`${prefix}jhelp`))&&(message.guild.roles.find(role => role.name === "CYAN"))){
            var embed = new Discord.RichEmbed()               
                .setTitle("Lancé de dés !")
                .setColor("#0cc4d8")
                .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
                .setDescription("Tu trouveras si dessous la liste complète des commandes du bot 😉")
                .setFooter("Bot by @Adelixxe")
                .setTimestamp()
                .addField(". **!jdes**", "pour lancer un dé de 3 à 100 faces")
                .addField(". **!jhelp**", "pour voir la liste des commandes");
                message.channel.send({embed});
            }
    if((message.content.startsWith(`${prefix}jhelp`))&&(message.guild.roles.find(role => role.name === "VIOLET"))){
        var embed = new Discord.RichEmbed()               
            .setTitle("Lancé de dés !")
            .setColor("#8b00d3")
            .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")                            
            .setDescription("Tu trouveras si dessous la liste complète des commandes du bot 😉")
            .setFooter("Bot by @Adelixxe")
            .setTimestamp()
            .addField(". **!jdes**", "pour lancer un dé de 3 à 100 faces")
            .addField(". **!jhelp**", "pour voir la liste des commandes");
            message.channel.send({embed});
            }
    });            
    
bot.login(process.env.BOT_TOKEN);