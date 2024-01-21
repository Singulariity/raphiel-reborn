import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import ImageCommandHandler, {
	ImageCommandHandlerProps,
} from '../../utils/ImageCommandHandler';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option
			.setName('user')
			.setDescription('Who do you want to slap?')
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'slap',
		description: 'Slap someone',
		category: 'Fun',
	},
	async execute(interaction) {
		let options: ImageCommandHandlerProps = {
			interaction,
			option: 'user',
			self_message: 'But... why? ;-;',
			bot_message: '**%1**, we can no longer be friends ;-;',
			embed_message: '**%2**, you slapped by **%1**.',
			type: 'slap',
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
