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




client.login("ODExNjY1MjA4Njg5ODE5NzI5.YC1gIQ.i96KtrFGWlUwwvbI9RtPTjld5Ok")
