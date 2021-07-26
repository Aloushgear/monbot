var Scraper= require('image-scraper');

const google = new Scraper({
    puppeteer:{
        headless: true
    }
})
module.exports = {
    name: 'image',
    description: "recherche une image",
    async execute(message, args){
        const image_query = args.join(' ');
        //if(!args['joue']) return message.reply("Cette commande n'est pas prise en charge");
        if(!image_query) return message.channel.send('veuillez entrez un nom');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
        
    }
}