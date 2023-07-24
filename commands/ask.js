const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask')
		.setDescription('Ask anything!'),
	async execute(interaction) {
		await interaction.reply('Puddle Jumper can help you!');
	},
};
