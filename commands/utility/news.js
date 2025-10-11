const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder().setName('news').setDescription('replies with the news'),
	async execute(interaction) {
		
	},
};