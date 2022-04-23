module.exports = {
    name: 'kick',
    userPerms: ['KICK_MEMBERS'],
    clientPerms: ['KICK_MEMBERS'],
    description: "Kick a user",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        //Command action
        const member = message.mentions.users.first();
        if(member) {
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick().catch(error => {
                //Handle permission error
                message.channel.send("You can't kick a user that has higher privileges than this bot");
            });
            message.channel.send("User has been kicked");
        } else {
            message.channel.send("You could't kick that member");
        }
    }
}