const { INSTAGRAM } = require('../../config.json');

module.exports = {
    name: 'instagram',
    aliases: ["insta"],
    description: "Send Instagram Social Link",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        message.channel.send(INSTAGRAM);
    }
}