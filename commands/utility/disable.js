// WIP
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('disable')
		.setDescription('disable a command')
		.addStringOption((option) => option.setName('command').setDescription('The command to disable.').setRequired(true)),
	async execute(interaction) {
		const commandName = interaction.options.getString('command', true).toLowerCase();
		const command = interaction.client.commands.get(commandName);
		const newStatus = interaction.options.getBoolean('status');
		if (!command) {
			return interaction.reply(`There is no command with name \`${commandName}\`!`);
		}
		command.enabled = newStatus;

	},
};