import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { fetchRandom } from 'nekos-best.js';

import { Command } from '../../../types';
import Color from '../../utils/Colors';

module.exports = {
	data: new SlashCommandBuilder(),
	options: {
		name: 'blush',
		description: '(//ω//)',
		category: 'Fun',
	},
	async execute(interaction) {
		let image_url = (await fetchRandom('blush')).results[0].url;

		const embed = new EmbedBuilder()
			.setTitle('(//ω//)')
			.setImage(image_url)
			.setColor(Color.PINK);

		return await interaction.reply({ embeds: [embed] });
	},
} satisfies Command;
