const { MessageEmbed } = require("discord.js")
module.exports = {
    name : "ping",
    description : "chekling ping of bot",
    options: [{
            name: 'message',
            description: 'send message',
            type: 'STRING',
            require: true,
    }],
    run : async (client, interaction, args) => {
        const msg = interaction.options.getString('message');
        interaction.followUp(msg);
    }
}