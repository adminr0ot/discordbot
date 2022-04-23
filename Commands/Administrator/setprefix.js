const db = require('quick.db');

module.exports = {
    name: 'setprefix',
    aliases: ["sp"],
    userPerms: ['ADMINISTRATOR'],
    clientPerms: ['ADMINISTRATOR'],
    ownerOnly: true, 
    description: "set prefix per server",
    run: async(client, message, args, prefix) => {
        if(!message.content.startsWith(prefix)) return;
        const newprefix = args[0];
        if(!newprefix) return message.channel.send(`Enter a valid prefix`);
        if(newprefix.lenght > 5) return message.channel.send(`Invalid prefix. The prefix you provided is greater than 5 characters.`);
        message.channel.send(`The prefix is been set to **${newprefix}**`);
        db.set(`prefix_${message.guild.id}`, newprefix);
    }
}