import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import ImageCommandHandler, {
	ImageCommandHandlerProps,
} from '../../utils/ImageCommandHandler';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option
			.setName('user')
			.setDescription('Who do you want to hug?')
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'hug',
		description: 'Hug someone',
		category: 'Fun',
	},
	async execute(interaction) {
		let options: ImageCommandHandlerProps = {
			interaction,
			option: 'user',
			self_message: 'Sorry to see you alone...',
			bot_message: '*Hugs **%1** back* 🩷',
			embed_message: '**%2**, you got a hug from **%1**.',
			type: 'hug',
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
