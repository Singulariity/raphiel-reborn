import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import ImageCommandHandler, {
	ImageCommandHandlerProps,
} from '../../utils/ImageCommandHandler';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option
			.setName('user')
			.setDescription('Who do you want to nom?')
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'nom',
		description: 'Eat someone',
		category: 'Fun',
	},
	async execute(interaction) {
		let options: ImageCommandHandlerProps = {
			interaction,
			option: 'user',
			self_message: 'Sorry to see you alone...',
			bot_message: '*Noms **%1** back* 🩷',
			embed_message: '**%2**, you got a nom from **%1**.',
			type: 'nom',
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
