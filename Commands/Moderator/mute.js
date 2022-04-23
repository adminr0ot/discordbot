//add needed libaries
const ms = require('ms');

//module content

// Time as parameter can be specified with extensions 
//  y=years
//  d=days
//  h=hours
//  m=minutes 
//  s=seconds

const { DEFAULTUSERGROUPNAME, MUTEUSERGROUPNAME } = require('../../config.json');

module.exports = {
    name: 'mute',
    userPerms: ['MODERATE_MEMBERS'],
    clientPerms: ['MODERATE_MEMBERS'],
    description: "Command to Mute a User",
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

            //check if timer is specified
            if (!args[1]) {
                //Set Timeout without timer
                //change roles
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);

                //notify in chat
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }

            //Set Mute with Timer

            //change roles
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Can\'t find that member');
        }
    }
}