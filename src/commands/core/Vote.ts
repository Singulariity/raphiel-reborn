import {
	ActionRowBuilder,
	ButtonBuilder,
	ButtonStyle,
	EmbedBuilder,
	SlashCommandBuilder,
} from 'discord.js';

import { Command } from '../../types';
import Color from '../../utils/Colors';
import Emote from '../../utils/Emote';

module.exports = {
	data: new SlashCommandBuilder(),
	options: {
		name: 'vote',
		description: 'Vote link for Raphiel',
		category: 'Core',
	},
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setTitle('Support me! >_<')
			.setImage('https://i.imgur.com/K6NyyBF.jpg')
			.setColor(Color.SILVER);

		const link = new ButtonBuilder()
			.setLabel('Open')
			.setURL('https://top.gg/bot/436387468246384650/vote')
			.setEmoji(Emote.RAPHI_HAPPY)
			.setStyle(ButtonStyle.Link);

		const row = new ActionRowBuilder<ButtonBuilder>().addComponents(link);

		await interaction.reply({ embeds: [embed], components: [row] });
	},
} satisfies Command;
