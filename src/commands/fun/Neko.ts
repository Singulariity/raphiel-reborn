import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { fetchRandom } from 'nekos-best.js';

import { Command } from '../../../types';
import Color from '../../utils/Colors';

module.exports = {
	data: new SlashCommandBuilder(),
	options: {
		name: 'neko',
		description: 'Nekos!!',
		category: 'Fun',
	},
	async execute(interaction) {
		let image_url = (await fetchRandom('neko')).results[0].url;

		const embed = new EmbedBuilder()
			.setTitle('🩷 Random neko')
			.setImage(image_url)
			.setColor(Color.PINK);

		return await interaction.reply({ embeds: [embed] });
	},
} satisfies Command;
