import { EmbedBuilder, Events } from 'discord.js';

import { Listener } from '../../types';
import Logger from '../utils/Logger';
import Color from '../utils/Colors';

module.exports = {
	event: Events.GuildDelete,
	options: {},
	execute(guild) {
		const embed = new EmbedBuilder()
			.setAuthor({
				name: guild.name,
				iconURL: guild.icon ?? undefined,
			})
			.setDescription('🥀 Raphiel removed...')
			.setTimestamp(new Date())
			.setFooter({ text: guild.id })
			.setColor(Color.RED);

		Logger.log(guild.client, { embeds: [embed] });
	},
} satisfies Listener<Events.GuildDelete>;
