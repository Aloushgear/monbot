module.exports = {
    name: 'commit',
    description: "effacer un message",
    execute(message, args){
        const espace = args.join(' ');
        //if(!args['joue']) return message.reply("Cette commande n'est pas prise en charge");
        if(!espace) return message.reply('https://google.com/search?q='+espace);
        
    }
}