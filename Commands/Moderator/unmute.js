const { DEFAULTUSERGROUPNAME, MUTEUSERGROUPNAME } = require('../../config.json');

module.exports = {
    name: 'unmute',
    userPerms: ['MODERATE_MEMBERS'],
    clientPerms: ['MODERATE_MEMBERS'],
    description: "Command to Unmute a User",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        //Command action
        const target = message.mentions.users.first();
        if (target) {
            //define relevant roles
            let mainRole = message.guild.roles.cache.find(role => role.name === DEFAULTUSERGROUPNAME);
            let muteRole = message.guild.roles.cache.find(role => role.name === MUTEUSERGROUPNAME);

            //extract target user
            let memberTarget = message.guild.members.cache.get(target.id);

            //change roles
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);

            //notify in chat
            message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        } else {
            message.channel.send('Can\'t find that member');
        }
    }
}