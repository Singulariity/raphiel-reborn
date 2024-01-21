import { CommandInteraction, EmbedBuilder } from 'discord.js';
import { NbCategories, fetchRandom } from 'nekos-best.js';

import Utils from './Utils';
import Color from './Colors';

export interface ImageCommandHandlerProps {
	interaction: CommandInteraction;
	option: string;
	self_message: string;
	bot_message: string;
	type: NbCategories;
	embed_message: string;
}

export default async function ImageCommandHandler({
	interaction,
	option,
	self_message,
	bot_message,
	type,
	embed_message,
}: ImageCommandHandlerProps) {
	const receiver = interaction.options.getUser(option);

	if (!receiver) {
		return await interaction.reply({
			embeds: [Utils.errorEmbed('You must specify a user.')],
			ephemeral: true,
		});
	}

	const sender = interaction.user;

	if (sender.equals(receiver)) {
		return await interaction.reply({
			content: self_message,
		});
	}

	if (receiver.equals(interaction.client.user)) {
		return await interaction.reply({
			content: bot_message.replaceAll('%1', sender.displayName),
		});
	}

	let res = await fetchRandom(type);

	const embed = new EmbedBuilder()
		.setDescription(
			embed_message
				.replaceAll('%1', sender.displayName)
				.replaceAll('%2', receiver.displayName)
		)
		.setImage(res.results[0].url)
		.setColor(Color.PINK);

	return await interaction.reply({
		content: receiver.toString(),
		embeds: [embed],
	});
}
