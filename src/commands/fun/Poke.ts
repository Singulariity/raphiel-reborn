import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import ImageCommandHandler, {
	ImageCommandHandlerProps,
} from '../../utils/ImageCommandHandler';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option
			.setName('user')
			.setDescription('Who do you want to poke?')
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'poke',
		description: 'Poke someone',
		category: 'Fun',
	},
	async execute(interaction) {
		let options: ImageCommandHandlerProps = {
			interaction,
			option: 'user',
			self_message: 'But... why? ;-;',
			bot_message: "Don't poke me :T",
			embed_message: '**%2**, you poked by **%1**.',
			type: 'poke',
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
