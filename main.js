const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';


const fs = require('fs');

client.commands =new Discord.Collection();


const commandFiles = fs.readdirSync('./').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require('./commands/aide');
    const commad = require('./commands/commit');
    const commade = require('./commands/image');
    client.commands.set(command.name, command);
    client.commands.set(commad.name, commad);
    client.commands.set(commad.name, commade);
}



client.once('ready', () => {
    console.log('NyanCat est en ligne');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let args= message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    //args = args.join(" ");
    //const command = args.shift();

    switch (command){

        case 'salut':
            message.channel.send('salut!!!');
            break;
        case 'gopython':
            message.channel.send('https://www.python.org/');
            break;
        case 'gopypi':
            message.channel.send('https://pypi.org/');
            break;
        case 'aide':
            client.commands.get('aide').execute(message,args, Discord);
            break;
        case 'commit':
            client.commands.get('commit').execute(message,args);
            break;
        case 'image':
            client.commands.get('image').execute(message,args);
            break;
        default:
            message.channel.send('https://google.com/search?q='+command);
            break;
    }
})
client.login(process.env.TOKEN);