module.exports = {
    name: 'ping',
    aliases: ["p"],
    description: "this is a ping command",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        message.channel.send('pong');
    }
}