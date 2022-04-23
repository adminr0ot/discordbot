const { FACEBOOK } = require('../../config.json');

module.exports = {
    name: 'facebook',
    aliases: ["fb"],
    description: "Send Facebook Social Link",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        message.channel.send(FACEBOOK);
    }
}