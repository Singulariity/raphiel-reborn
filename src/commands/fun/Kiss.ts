import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import ImageCommandHandler, {
	ImageCommandHandlerProps,
} from '../../utils/ImageCommandHandler';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option
			.setName('user')
			.setDescription('Who do you want to kiss?')
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'kiss',
		description: 'Give kisses!',
		category: 'Fun',
	},
	async execute(interaction) {
		let options: ImageCommandHandlerProps = {
			interaction,
			option: 'user',
			self_message: 'Sorry to see you alone ;-;',
			bot_message: '*Kisses **%1** back* 🩷',
			embed_message: '**%2**, you got a kiss from **%1**. >.<',
			type: 'kiss',
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
