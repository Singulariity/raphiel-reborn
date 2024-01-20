import { EmbedBuilder, SlashCommandBuilder } from 'discord.js';
import { fetchRandom } from 'nekos-best.js';

import { Command } from '../../../types';
import Color from '../../utils/Colors';
import Utils from '../../utils/Utils';

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
		const receiver = interaction.options.getUser('user');

		if (!receiver) {
			return await interaction.reply({
				embeds: [Utils.errorEmbed('You must specify a user.')],
				ephemeral: true,
			});
		}

		const sender = interaction.user;

		if (sender.equals(receiver)) {
			return await interaction.reply({
				content: 'But... why? ;-;',
			});
		}

		if (receiver.equals(interaction.client.user)) {
			return await interaction.reply({
				content: "How could you :'(",
			});
		}

		const res = await fetchRandom('baka');

		const embed = new EmbedBuilder()
			.setDescription(
				`**${sender.displayName}** called **${receiver.displayName}** a baka.`
			)
			.setImage(res.results[0].url)
			.setColor(Color.PINK);

		return await interaction.reply({
			content: receiver.toString(),
			embeds: [embed],
		});
	},
} satisfies Command;
