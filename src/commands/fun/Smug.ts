import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { fetchRandom } from 'nekos-best.js';

import { Command } from '../../../types';
import Color from '../../utils/Colors';

module.exports = {
	data: new SlashCommandBuilder(),
	options: {
		name: 'smug',
		description: '( ͡° ͜ʖ ͡°)',
		category: 'Fun',
	},
	async execute(interaction) {
		let image_url = (await fetchRandom('smug')).results[0].url;

		const embed = new EmbedBuilder()
			.setTitle('( ͡° ͜ʖ ͡°) Random smug face')
			.setImage(image_url)
			.setColor(Color.GOLD);

		return await interaction.reply({ embeds: [embed] });
	},
} satisfies Command;
