import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../types';

module.exports = {
	data: new SlashCommandBuilder(),
	options: {
		name: 'test',
		description: 'test',
	},
	execute(interaction) {
		interaction.reply({ content: 'test', ephemeral: true });
	},
} as Command;
