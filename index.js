const Discord = require("discord.js");
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
const config = require("./config.json");
const { Client, MessageEmbed } = require('discord.js');


////////////////////////////////////////////////////////////
client.on("ready", () => {
	console.log(`NerekoJunior listo!,
   conectado en ${client.guilds.cache.size} servidores y ${client.users.cache.size} usuarios.`);
  
	client.user.setPresence( {
		activity: {
			name: `n!help | ${client.users.cache.size} usuarios | ${client.guilds.cache.size} servers | Version 1.0.0`,
			type: "PLAYING"
		},
	 });
  
  });
////////////////////////////////////////////////////////////
  var prefix = config.prefix;

////////////////////////////////////////////////////////////
const embed = require('discord-embed-maker');
embed.addField(`→ (n!)ping`, `Comprueba la latencia del bot y de tus mensajes`, true);
embed.addField(`→ (n!)youtube`, `Mi canal de Youtube`)
embed.addField(`→ (n!)instagram`, `Mi perfil de Instagram`)
embed.addField(`→ (n!)twitter`, `Mi perfil de Twitter`)
embed.addField(`→ (n!)twitch`, `Mi perfil de Twitch`)
embed.addField(`→ (n!)cofres`, `Mi colección de cofres`)
embed.addField(`→ (n!)creador`, `Usuario del creador del bot`)
embed.addField(`→ (n!)dueña`, `Usuario de dueño del server`)
embed.addField(`→ (n!)ayuda`, `Otra forma de ver n!help`)
embed.addField(`→ (n!)say`, `Enviar un mensaje con el bot`)
embed.addField(`→ (n!)serverslist`, `Para saber en cuantos servers estoy`)
embed.setTimestamp()
embed.setColor('#016DFF')
embed.setTitle(`Comandos de NerekoJunior`);
embed.setFooter('Espero que os guste 🌛');
// You can chain functions!
// In your main JS file
client.on('message', (message) => {
  if (message.content.startsWith(prefix + "help")) { 
		message.channel.send( { embed: embed } );
	}
})
////////////////////////////////////////////////////////////
const ayuda = new Discord.MessageEmbed()
    .addField(`→ ping`, `Comprueba la latencia del bot y de tus mensajes`, true)
    .addField(`→ youtube`, `Mi canal de Youtube`, true)
    .addField(`→ instagram`, `Mi perfil de Instagram`, true)
    .addField(`→ twitter`, `Mi perfil de Twitter`, true)
    .addField(`→ twitch`, `Mi perfil de Twitch`, true)
    .addField(`→ cofres`, `Mi colección de cofres`, true)
    .addField(`→ creador`, `Usuario del creador del bot`, true)
    .addField(`→ dueña`, `Usuario de dueño del server`, true)
    .addField(`→ help`, `Vieja forma de ver n!ayuda`, true)
	.addField(`→ say`, `Enviar un mensaje con el bot`, true)
    .addField(`→ serverslist`, `Para saber en cuantos servers estoy`, true)
	.setTimestamp()
    .setColor('#4900FF')
	.setFooter("Espero que os guste 🌛")
    .setTitle(`Comandos de NerekoJunior`);
    
    client.on('message', (message) => {
      if (message.content.startsWith(prefix + "ayuda")) { 
        message.channel.send( { embed: ayuda } );
      }
    })
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const RichEmbed = new Discord.MessageEmbed()
    .setTitle("Quien Soy")
    .setColor(0x00AE86)
    .setDescription("Espero que os guste el bot.")
    .setFooter("Hecho con esfuerzo")
	.addField("👉Me llamo Nerea, pero puedes llamarme también como apodo Nereko.")
	.addField("🙌Soy del año 1997, con lo cual tengo 23 años.")
    .setTimestamp()
    .setURL("https://discord.gg/JfN6QBp8SY")
    .addField("Eslogan",
      "La vida son dos dias")
    .addField("Creador Bot", "Sergiovski#6089", true)
    
client.on('message', (message) => {
  if (message.content.startsWith(prefix + "RichEmbed")) { 
		message.channel.send( { embed: RichEmbed } );
	}
})
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'serverslist') {
		return message.channel.send(`📊 Contador Servers: ${client.guilds.cache.size}`);
	}
});
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'creador') {
		return message.channel.send(`Bot realizado por Sergiovski#6089`);
	}
});

////////////////////////////////////////////////////////////

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'ping') {
		return message.channel.send(`🤖 Latencia Bot ${Date.now() - message.createdTimestamp}ms. 🏓 Latencia API ${Math.round(client.ws.ping)}ms`);
	}
});
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'youtube') {
		return message.channel.send(`🔴 https://www.youtube.com/c/Elmundodenekodarkblack/videos?view_as=subscriber 🔴`);
	}
});
////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'instagram') {
		return message.channel.send(`🟠 https://www.instagram.com/_nereko_/ 🟠`);
	}
});
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'twitter') {
		return message.channel.send(`🔵 https://twitter.com/Nereko2 🔵`);
	}
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'twitch') {
		return message.channel.send(`🟣 https://www.twitch.tv/nerekoo 🟣`);
	}
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'cofres') {
		return message.channel.send(`💌 https://www.streamloots.com/nerekoo 💌`);
	}
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if (command === 'directo') {
		let channel = message.mentions.channels.first();
		return message.channel.send(`Iros uniendo que estoy en directo https://www.twitch.tv/nerekoo @everyone`);
	}
});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (command === 'say') {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	const user = message.author;
	
	if (!args[0]) {
	user.send("Provide a word to say in the say command\nExample: !say Hello")
	}
	
	const say = args.join(" ");
	message.channel.send(say)
	message.delete()
	}
	
	});
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'dueña') {
		return message.channel.send(`👧🏼 Dueña de **"El rincon de Nereko"**, mi discord es Nereko#5561 👧🏼`);
	}
});
////////////////////////////////////////////////////////////


client.login(config.token); 