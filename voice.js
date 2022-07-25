import discord, { Options } from "discord.js";
import { AudioPlayer, createAudioPlayer, createAudioResource, joinVoiceChannel, NoSubscriberBehavior, PlayerSubscription } from "@discordjs/voice";

const connections = new Map();
const prefix = "."

export function voiceChannel(client){
    
    client.on("messageCreate", (usermessage) => {
        if (usermessage.content.toLowerCase() == prefix + "join") {        
            
            const connection = joinVoiceChannel({
                channelId: "987415297520713738",
                guildId: "844219541890531361",
                adapterCreator: usermessage.guild.voiceAdapterCreator

                
                });
                connections.set(usermessage.guild.id, connection)
            const embed = new discord.MessageEmbed()
                .setColor("DARK_RED")
                .setDescription("The bot has successfully joined a voice channel!")
                usermessage.channel.send({embeds: [embed]})

                
                
            

        }
        else if (usermessage.content.toLowerCase() == prefix + "dc"){
            
            const connection = connections.get(usermessage.guild.id)
            if (!connection){
                const embed1 = new discord.MessageEmbed()
                    .setColor("RED")
                    .setDescription("The bot must be in a voice channel to be disconnected!")
                    usermessage.channel.send({embeds: [embed1]})
                    return;

            }      
            connection.destroy()
                const embed2 = new discord.MessageEmbed()
                    .setColor("BLUE")
                    .setDescription("The bot was successfully disconnected from the voice channel!")
                    usermessage.channel.send({embeds: [embed2]})
                    connections.set(usermessage.guild.id, null)

        
       
        }
        else if(usermessage.content.toLowerCase() == prefix + "play"){
            console.log("idk")
            const player = createAudioPlayer({
                behaviors: {
                    noSubscriber: NoSubscriberBehavior.Play
                } 
                
            
                    
                        
            })
                const resource = createAudioResource("./Resources/negr.mp3")

                const text = usermessage.content.toLowerCase();
                if (!text.startsWith(prefix)) return;
                
                const args = text.slice(prefix.length).split("");
                const command = args.shift();


               const connection = connections.get(usermessage.guild.id)

                connection.subscribe(player);
                player.play(resource);
                        
            
        }
        }
        
        
    )

}

