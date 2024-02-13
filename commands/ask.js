const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask')
		.setDescription('Ask anything.'),
	async execute(interaction) {
		const openApp = new ButtonBuilder()
			.setLabel('Open App')
			.setURL('https://app.smaug.gold')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder()
			.addComponents(openApp);

		await interaction.reply({
			content: 'What can I help you with, human?',
			components: [row],
		});
	},
};
