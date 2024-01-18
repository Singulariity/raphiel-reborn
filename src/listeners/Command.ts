import { Events } from 'discord.js';

import { Listener } from '../types';

module.exports = {
	event: Events.InteractionCreate,
	options: {
		isOnce: false,
	},
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		let command = commands.get(interaction.commandName);

		if (!command) {
			interaction.reply({
				content: `Command \`${interaction.commandName}\` was not found.`,
				ephemeral: true,
			});
			return;
		}

		try {
			command.execute(interaction);
		} catch (error) {
			console.log(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({
					content: 'An error occurred while executing this command!',
					ephemeral: true,
				});
			} else {
				await interaction.reply({
					content: 'An error occurred while executing this command!',
					ephemeral: true,
				});
			}
		}
	},
} as Listener<Events.InteractionCreate>;
