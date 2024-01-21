import { SlashCommandBuilder } from 'discord.js';
import { fetchRandom } from 'nekos-best.js';

import { Command } from '../../../types';
import ImageCommandHandler from '../../utils/ImageCommandHandler';

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
		let options = {
			interaction,
			option: 'user',
			self_message: 'But... why? ;-;',
			bot_message: "How could you :'(",
			embed_message: '**%1** called **%2** a baka.',
			image_url: (await fetchRandom('baka')).results[0].url,
		};
		return await ImageCommandHandler(options);
	},
} satisfies Command;
