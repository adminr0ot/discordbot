const { TWITTER } = require('../../config.json');

module.exports = {
    name: 'twitter',
    aliases: ["tw"],
    description: "Send Twitter Social Link",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        message.channel.send(TWITTER);
    }
}