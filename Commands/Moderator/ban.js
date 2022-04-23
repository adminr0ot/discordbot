module.exports = {
    name: 'ban',
    userPerms: ['BAN_MEMBERS'],
    clientPerms: ['BAN_MEMBERS'],
    description: "Ban a user",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        //Command action
        const member = message.mentions.users.first();
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban().catch(error => {
                //Handle permission error
                message.channel.send("You can't ban a user that has higher privileges than this bot");
            });
            message.channel.send("User has been banned");
        } else {
            message.channel.send("You could't ban that member");
        }
    }
}