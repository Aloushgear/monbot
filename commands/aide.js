module.exports = {
    name: 'aide',
    description: "Embeds!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#DC143C')
        .setTitle('Mode d\'utilisation')
        .setURL('https://www.google.com/')
        .addFields(
            {name: 'Utiliser le bot', value: 'Chaque commande commence par un tiret'},
            {name: 'Faire une recherche', value: 'S\'assurer de mettre %20 entre les espaces' }
        )
        .setImage('https://www.sitel.com/pt-br/wp-content/uploads/sites/10/2020/07/vantagens-chatbot.jpg')
        .setFooter('Lisez bien les instructions')
        message.channel.send(newEmbed);
        //message.channel.send('Commande du bot en commençant par un tiret : \n\n-searchpython : utiliser pour aller sur le site officiel de Python .\n-gopypi : utiliser pour aller sur le dépôt tiers officiel du langage de programmation Python .\n-aide : pour connaitre les commandes du bot');
    }
}