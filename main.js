import { joinVoiceChannel } from "@discordjs/voice";
import discord from "discord.js";
import dotenv from "dotenv";
import { voiceChannel } from "./voice.js";

const prefix = "."
const client = new discord.Client({intents: ["GUILDS", "DIRECT_MESSAGES", "GUILD_BANS", "GUILD_MESSAGES", "GUILD_VOICE_STATES" ]});



client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Id: ${client.user.id}`)
    client.user.setActivity(".help", {type: "LISTENING"});
})

client.on("guildCreate", (welcomemessage) => {
    const embed = new discord.MessageEmbed()
        .setColor("RED")
        .setTitle("~Ara Ara it's pleasure for me to be invited on this server.")
        .setDescription("I am in WIP (Work in progress) stage so I dont have that much commands, but if you want to try some just type **__.help__** and enjoy!\n\n *Bot made by: Datel1999CZ*");


welcomemessage.systemChannel.send({embeds: [embed]});
    });  

client.on("messageCreate", (usermessage) => {
    if (usermessage.content.toLowerCase() == prefix + "rias"){
        const randomNumber = Math.floor(Math.random() * 7) + 1;
        usermessage.channel.send({ 
            content: "*~Ara Ara*  here you go!",
            files: [{
                attachment: "./RiasGremory/Rias" + randomNumber + ".jpg",
                name: "Rias" + randomNumber + ".jpg"
            }]
        })
    }
    else if (usermessage.content.toLowerCase() == prefix + "story"){
        const embed1 = new discord.MessageEmbed()
            .setColor("RED")
            .setTitle("**Here's my story!**")
            .setDescription("**My name is Rias Gremory.**\nI'm a student at Kuoh Academy and heiress of the Gremory Clan, younger sister of Sirzechs Lucifer, Crimson-Haired Ruin Princess, but you can call me just Rias.\nI was born as Pure-Blooded Devil to my father Zeoticus Gremory and mother Venelana Gremory.\nI have Crimson Red hair and Blue eyes.\n I'm the school's number-one beauty and, as well as one of Kuoh Academy's Great Ladies alongside with my friend Akeno Himejima.\n If you want to know more about my amazing and interesting story you should watch all seasons of High school DxD anime. Nice to meet you stranger have a nice day.")
            usermessage.channel.send({embeds: [embed1]})
    }
    else if (usermessage.content.toLowerCase() == prefix + "akeno"){
        const randomNumber1 = Math.floor(Math.random() * 5) + 1;
        usermessage.channel.send({ 
            content: "*~Ara Ara*  here you go!", 
            files: [{
                attachment: "./AkenoHimejima/Akeno" + randomNumber1 + ".jpg",
                name: "Akeno" + randomNumber1 + ".jpg"
        }]
    })

    }
    else if (usermessage.content.toLowerCase() == prefix + "asia"){
        const randomNumber2 = Math.floor(Math.random() * 5) + 1;
        usermessage.channel.send({
            content: "*~Ara Ara*  here you go!", 
            files: [{
                attachment: "./AsiaArgento/Asia" + randomNumber2 + ".jpg",
                name: "Asia" + randomNumber2 + ".jpg"
        }]
    })
    }

    else if (usermessage.content.toLowerCase() == prefix + "koneko"){
        const randomNumber3 = Math.floor(Math.random() * 9) + 1;
        usermessage.channel.send({
            content: "*~Ara Ara*  here you go!", 
            files: [{
                attachment: "./KonekoToujou/Koneko" + randomNumber3 + ".jpg",
                name: "Koneko" + randomNumber3 + ".jpg"
        }]
    })
    }
    
    else if (usermessage.content.toLowerCase() == prefix + "help"){
        const embed2 = new discord.MessageEmbed()
             .setColor("RED")
            .setTitle("Here you have some commands, have fun!")
            .setDescription("**- Prefix = .**\n\n** - Use *__.rias__* for some photos of Rias Senpai!**\n\n**- Use *__.akeno__* for some photos of Akeno San!**\n\n**- Use *__.asia__* for some photos of Asia Chan!**\n\n**- Use *__.koneko__* for some photos of Koneko Chan!**\n\n**- Use *__.story__* to see story of me, Rias Senpai.**\n\n - **(WIP Feature!) Use *__.join__* to make the bot join your voice channel.**")

        usermessage.channel.send({embeds: [embed2]})
    }

    }
    
    
           

);
voiceChannel(client)

dotenv.config();
    client.login(process.env.TOKEN);
