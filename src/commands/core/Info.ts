import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import { version } from '../../../package.json';
import Color from '../../utils/Colors';

module.exports = {
	data: new SlashCommandBuilder(),
	options: {
		name: 'info',
		description: "Shows Raphiel's information",
		category: 'Core',
	},
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setAuthor({
				name: "Raphiel's Info",
			})
			.setColor(Color.YELLOW)
			.setThumbnail(interaction.client.user.avatarURL())
			.addFields(
				{
					name: 'Bot ID',
					value: interaction.client.user.id,
					inline: true,
				},
				{
					name: 'Server Count',
					value: interaction.client.guilds.cache.size.toString(),
					inline: true,
				},
				{
					name: 'Owner',
					value: '`@_singularity_`',
					inline: false,
				},
				{
					name: 'Version',
					value: `\`v${version}\``,
					inline: true,
				}
			);

		await interaction.reply({ embeds: [embed] });
		return;
	},
} satisfies Command;
