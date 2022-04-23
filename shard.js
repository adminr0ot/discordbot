const {ShardingManager} = require('discord.js');
require('dotenv').config();

let manager = new ShardingManager('./main.js', {
    token: process.env.DISCORD_TOKEN,
    totalShards: 'auto',
});

manager.on('shardCreate', shard => {
    console.log(`[SHARDS]: Launched shard ${shard.id}`)
});

manager.spawn();