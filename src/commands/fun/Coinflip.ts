import {
	CommandInteractionOptionResolver,
	SlashCommandBuilder,
} from 'discord.js';

import { Command } from '../../../types';
import Utils from '../../utils/Utils';
import Emote from '../../utils/Emote';

module.exports = {
	data: new SlashCommandBuilder().addStringOption((option) =>
		option
			.setName('guess')
			.setDescription('What is your guess?')
			.addChoices(
				{ name: 'heads', value: 'heads' },
				{ name: 'tails', value: 'tails' }
			)
	) as SlashCommandBuilder,
	options: {
		name: 'coinflip',
		description: 'Heads and tails!',
		category: 'Fun',
	},
	async execute(interaction) {
		let guess = (
			interaction.options as CommandInteractionOptionResolver
		).getString('guess', false);

		let random = Utils.getRandom(1) == 0 ? 'heads' : 'tails';
		let win = guess == random;

		let prefix;
		if (guess) {
			prefix = win ? Emote.CHECK : Emote.CROSS;
		} else {
			prefix = random == 'heads' ? '🔴' : '🔵';
		}

		let text = `${prefix} ${random}`;

		if (guess) {
			text += '\n\n' + (win ? '**You won!**' : '*You were wrong...*');
		}

		return await interaction.reply(text);
	},
} satisfies Command;
