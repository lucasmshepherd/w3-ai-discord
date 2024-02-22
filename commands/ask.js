// const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const axios = require('axios');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask')
		.setDescription('Ask anything.')
		.addStringOption((option) => option.setName('question').setDescription('The question you want to ask.').setRequired(true)),
	async execute(interaction) {
		// const openApp = new ButtonBuilder().setLabel('Open App').setURL('https://app.smaug.gold').setStyle(ButtonStyle.Link);

		// const row = new ActionRowBuilder().addComponents(openApp);

		// Send initial message to the user
		// await interaction.reply({
		// 	content: 'What can I help you with, human?',
		// 	components: [row],
		// });

		try {
			// Extract the question from the interaction options
			const question = interaction.options.getString('question', true);
			console.log({ question });

			// Make a POST request to the specified endpoint with the question in the JSON body
			const response = await axios.post('https://rayn-ai-4b6d882cd120.herokuapp.com/openai/ask', {
				question: question,
			});

			// Send the response from the server back to the same channel
			await interaction.reply(`Received response: ${response.data}`);
		} catch (error) {
			// If an error occurs, send an error message to the same channel
			console.error('Error sending POST request:', error.response?.data);
			await interaction.reply('An error occurred while sending the POST request.');
		}
	},
};
