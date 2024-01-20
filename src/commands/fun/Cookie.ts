import { SlashCommandBuilder } from 'discord.js';

import { Command } from '../../../types';
import Utils from '../../utils/Utils';

module.exports = {
	data: new SlashCommandBuilder().addUserOption((option) =>
		option
			.setName('user')
			.setDescription('Who do you want to give a cookie to?')
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'cookie',
		description: 'Give someone a cookie',
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
				content: 'Sorry to see you alone...',
			});
		}

		if (receiver.equals(interaction.client.user)) {
			return await interaction.reply({
				content: '*Aww thanks* 🩷',
			});
		}

		return await interaction.reply(
			`${receiver}, you got a 🍪 from ${sender}\n\n(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ 🍪`
		);
	},
} satisfies Command;
