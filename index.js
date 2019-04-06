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
                if (maximum === "3" || maximum === "4" || maximum ==="6" || maximum ==="8" || maximum ==="10" || 
                maximum ==="12" || maximum ==="16" || maximum ==="2O" || maximum ==="24" || maximum ==="30" ||
                maximum ==="100") {
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

    if (message.content.startsWith(`${prefix}jhelp`)) {   
        var embed = new Discord.RichEmbed()               
        .setTitle("Liste des commandes :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#00AE86")
        .setDescription("Tu trouveras si dessous la liste complète des commandes du bot 😉")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField(". **!jdes**", "pour lancer un dé de 3 à 100 faces")
        .addField(". **!jhelp**", "pour voir la liste des commandes");

    message.channel.send({embed});


    };         
    
    if (message.content.startsWith(`${prefix}info`) && message.author.id === '294148055228350464' ){
        console.log("ID Reconnu THOMAS");
        var embed = new Discord.RichEmbed()
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#00AE86")
        .setDescription("Apprenez en plus sur le nain Kan'hibal H'korpth ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Kah'nibal H'korpth")
        .addField("Race:", "Nain")
        .addField("Classe:", "Barde")
        .addField("Spécificité:", "Nyctalopie, aime boire, fait parti de la basse classe nain")
        .addField("Capacité:", "Musique de sommeil")
        .addField("Lancé de dés:", "3/3")
        .addField("Inventaire:", "Mandoline magique(héritage familial), vêtement de spectacle(avec un chapeau à plume), dague, besace, moyenne somme d'argent");
        message.channel.send({embed});
    };

    if (message.content.startsWith(`${prefix}info`) && message.author.id === '209656163736879105') {
        console.log("ID Reconnu ALEXANDRE");
        var embed = new Discord.RichEmbed()        
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#00AE86")
        .setDescription("Apprenez en plus sur l'enfant Ulrick LeSournois ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Ulrick LeSournois")  
        .addField("Race:", "Humain") 
        .addField("Classe:", "Voleur")
        .addField("Spécificité:", "Enfant")
        .addField("Capacité:","Sens du danger")
        .addField("Lancé de dés:","4/2")
        .addField("Inventaire:","Dague, vêtements de tissu, outil de crochetage fait main, besace, très peu d'argent")
        message.channel.send({embed});   
    };

    if (message.content.startsWith(`${prefix}info`) && message.author.id === '264005489413718027') {
        console.log("ID Reconnu PAUL");
        var embed = new Discord.RichEmbed()        
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#00AE86")
        .setDescription("Apprenez en plus sur le guerrier Ned Ricwulf ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Ned Ricwulf")  
        .addField("Race:", "Humain") 
        .addField("Classe:", "Guerrier")
        .addField("Spécificité:", "Impulsif, air menaçant")
        .addField("Capacité:", "Soif de sang")
        .addField("Lancé de dés:", "3/3")
        .addField("Inventaire:", "Armure lourde, espadon, besace, peu d'argent")
        message.channel.send({embed});   
    };   

    if (message.content.startsWith(`${prefix}info`) && message.author.id === '149503854126432256') {
        console.log("ID Reconnu ROMAIN");
        var embed = new Discord.RichEmbed()        
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#00AE86")
        .setDescription("Apprenez en plus sur le nécromancien        ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "(en attente)")  
        .addField("Race:", "Humain") 
        .addField("Classe:", "Nécromancien")
        .addField("Spécificité:", "Scientifique borner, antireligieux")
        .addField("Capacité:","résurrection ")
        .addField("Lancé de dés:","3/3")
        .addField("Inventaire:","Sceptre magique, robe noir, materiel d'alchimie, besace, beaucoup d'argent")
        message.channel.send({embed});   
    };    

    if (message.content.startsWith(`${prefix}info`) && message.author.id === '283578951874510849') {
        console.log("ID Reconnu NOA");
        var embed = new Discord.RichEmbed()        
        .setTitle("Informations sur le personnage :")
        .setAuthor("McJDR", "https://cdn.discordapp.com/avatars/559511560884584458/8ee41f0e4fd29901b9f6da57f14af9af.png")
        .setColor("#00AE86")
        .setDescription("Apprenez en plus sur l'orc Nahrgal Shazug ♂")
        .setFooter("Bot by @Adelixxe")
        .setTimestamp()
        .addField("Nom:", "Nahrgal Shazug")  
        .addField("Race:", "Orc") 
        .addField("Classe:", "Chaman")
        .addField("Spécificité:", "Bonté naturel, plutôt costaud, est sensible à propos de son chien mort")
        .addField("Capacité:","Graine principale: arc électrique, alchimie de base")
        .addField("Lancé de dés:","3/3")
        .addField("Inventaire:","Bourse à graine(10, capacité max:20), faucille, tenue sans manche et sarouel, une potion de soin, sac à dos de bonne taille, peu d'argent")
        message.channel.send({embed});   
    };       
})

bot.login(process.env.BOT_TOKEN);