const Discord = require('discord.js')

    exports.run = async(client, message, args) => {
        message.channel.send('https://images-ext-2.discordapp.net/external/POjRfMzRP1GnCNRpXE2ASM-9N6V5NMe1dA5pN0YATEs/%3Fwidth%3D960%26height%3D540/https/media.discordapp.net/attachments/785313661811687465/806182089413623808/CMF2.png?width=400&height=225')
    }

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pastırma'],
    permLevel: 0
}

exports.help = {
    name: 'pastırma'
}
