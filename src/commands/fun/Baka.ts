import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import ImageCommandHandler, {
	ImageCommandHandlerProps,
} from '../../utils/ImageCommandHandler';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option.setName('user').setDescription('Who is baka?').setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'baka',
		description: 'Call someone a b-baka!',
		category: 'Fun',
	},
	async execute(interaction) {
		let options: ImageCommandHandlerProps = {
			interaction,
			option: 'user',
			self_message: 'But... why? ;-;',
			bot_message: "How could you :'(",
			embed_message: '**%1** called **%2** a baka.',
			type: 'baka',
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
