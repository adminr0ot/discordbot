const { YOUTUBE } = require('../../config.json');

module.exports = {
    name: 'youtube',
    aliases: ["yt"],
    description: "Send Youtube Social Link",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        message.channel.send(YOUTUBE);
    }
}