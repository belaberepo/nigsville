const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) => {
    
    if (message.content.startsWith("!" + "nuke")) {
        var contents = message.content.split('')
        var ammount = message.content.split('%')
            


        for (let step = 0; step < ammount; step++) {
            message.content.send(contents)
            }
                     
}
})




client.login(process.env.BOT_TOKEN)
