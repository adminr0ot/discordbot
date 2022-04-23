const { YOUTUBE } = require('../../config.json');

module.exports = {
    name: 'clear',
    aliases: ["cls"],
    userPerms: ['ADMINISTRATOR'],
    description: "Clear specified amount of messages from actual channel",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        //Error handling
        if(!args[0]) return message.reply("please specify the amount of messages that you want to clear");
        if(isNaN(args[0])) return message.reply("please enter a number");
        if(args[0] > 100) return message.reply("You can't delete more than 100 messages");
        if(args[0] < 1) return message.reply("you have to delete at least one message");

        //actions
        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages).catch(error => {
                //14 days error handling
                message.channel.send("Keep in mind, that messages older than 14 days have to be deleted manualy")
            });
        });
    }
}