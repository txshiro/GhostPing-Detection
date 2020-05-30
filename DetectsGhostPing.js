const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('messageDelete', message => {
    if (!message.guild) return;
    if (message.author.bot) return;

    if (message.mentions.members.first()) {
        let embed = new Discord.MessageEmbed()
            .setTitle("Ghost ping detected!")
            .addField('**Author**', message.author)
            .addField("**Content**", message.content)
            .setTimestamp();
        message.channel.send(embed)
    }
})

bot.on('messageUpdate', (oldMessage, newMessage) => {
    if (!oldMessage.guild) return;
    if (message.author.bot) return;

    const oldMessageMention = oldMessage.mentions.members.first()
    const newMessageMention = newMessage.mentions.members.first()

    if (oldMessageMention && !newMessageMention && oldMessage.author.id !== oldMessageMention.id) {
        let embed = new Discord.MessageEmbed()
            .setTitle("Ghost ping detected!")
            .addField('**Author**', oldMessage.author)
            .addField("**Old Messages**", oldMessage, true)
            .addField("**New Messages**", newMessage, true)
            .setTimestamp();
        oldMessage.channel.send(embed)
    }
})

bot.login("YOUR TOKEN HERE")