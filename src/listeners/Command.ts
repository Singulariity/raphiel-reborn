import { Events } from 'discord.js';

import { Listener } from '../../types';

module.exports = {
	event: Events.InteractionCreate,
	options: {
		isOnce: false,
	},
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		if (!interaction.inGuild()) {
			interaction.reply({
				content: `Sorry! You cannot use commands in DMs. :(`,
				ephemeral: true,
			});
			return;
		}

		let command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			interaction.reply({
				content: `Command \`${interaction.commandName}\` was not found.`,
				ephemeral: true,
			});
			return;
		}

		if (command.options.nsfw) {
			interaction.reply({
				content:
					"This channel is not marked as **NSFW**. You can't use this command here.",
				ephemeral: true,
			});
			return;
		}

		try {
			command.execute(interaction);
		} catch (error) {
			console.log(error);
			if (!interaction.replied && !interaction.deferred) {
				await interaction.reply({
					content: 'An error occurred while executing this command!',
					ephemeral: true,
				});
			}
		}
	},
} satisfies Listener<Events.InteractionCreate>;
