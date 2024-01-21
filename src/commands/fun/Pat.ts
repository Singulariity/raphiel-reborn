import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import ImageCommandHandler, {
	ImageCommandHandlerProps,
} from '../../utils/ImageCommandHandler';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option
			.setName('user')
			.setDescription('Who do you want to pat?')
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'pat',
		description: 'Pat someone',
		category: 'Fun',
	},
	async execute(interaction) {
		let options: ImageCommandHandlerProps = {
			interaction,
			option: 'user',
			self_message: "Don't be like that ;-;",
			bot_message: '**%1**, you p-pervert! 😳',
			embed_message: '**%2**, you got a pat from **%1**.',
			type: 'pat',
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
