import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import ImageCommandHandler, {
	ImageCommandHandlerProps,
} from '../../utils/ImageCommandHandler';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option
			.setName('user')
			.setDescription('Who do you want to tickle?')
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'tickle',
		description: 'Tickle someone',
		category: 'Fun',
	},
	async execute(interaction) {
		let options: ImageCommandHandlerProps = {
			interaction,
			option: 'user',
			self_message: 'But... why? ;-;',
			bot_message: '*giggles* 🩷',
			embed_message: '**%2**, you tickled by **%1**.',
			type: 'tickle',
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
