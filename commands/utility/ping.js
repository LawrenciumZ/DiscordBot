const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName('ping').setDescription('replies with Fuck you!'),
	async execute(interaction) {
		await interaction.reply('Fuck you!');
	},
};