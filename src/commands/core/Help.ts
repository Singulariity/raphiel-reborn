import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../../../types';

module.exports = {
	data: new SlashCommandBuilder().addStringOption((option) =>
		option
			.setName('command')
			.setDescription('Type the command name')
			.setRequired(false)
	) as SlashCommandBuilder,
	options: {
		name: 'help',
		description: 'Get help about commands',
	},
	async execute(interaction) {
		//TODO
		await interaction.reply({ content: '!', ephemeral: true });
		return;
	},
} satisfies Command;
