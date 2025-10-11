// WIP
const { SlashCommandBuilder } = require('discord.js');
const { newsdata_api } = require('/Users/Lawre/Desktop/Project/DiscordBot/config.json');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName('news').setDescription('replies with the news'),
	async execute(interaction) {
		await interaction.deferReply();
		const search = 'Nvidia';
		const url = `https://newsdata.io/api/1/latest?apikey=${newsdata_api}&q=${search}&language=en`;

		try {
			const response = await fetch(url);
			const data = await response.json;

			if (data.status !== 'success') {
				return interaction.editReply('Sorry, I couldn\'t fetch the news right now. The news API may be overloaded or the key is invalid.');
			} else {
				await interaction.editReply(data.result);
			}


		} catch (error) {
			console.error(error);
			await interaction.reply('error occured');
		}

	},
};
