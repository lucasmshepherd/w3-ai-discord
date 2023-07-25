const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask')
		.setDescription('Ask anything!'),
	async execute(interaction) {
		const openApp = new ButtonBuilder()
			.setLabel('Open App')
			.setURL('https://rewardz.network')
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder()
			.addComponents(openApp);

		await interaction.reply({
			content: 'Puddle Jumper can help you!',
			components: [row],
		});
	},
};
