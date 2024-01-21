import {
	CommandInteractionOptionResolver,
	EmbedBuilder,
	SlashCommandBuilder,
} from 'discord.js';

import { Command } from '../../../types';
import Utils from '../../utils/Utils';
import Color from '../../utils/Colors';

type Reaction =
	| 'angry'
	| 'araara'
	| 'evil'
	| 'holylight'
	| 'laugh'
	| 'nani'
	| 'nice'
	| 'run'
	| 'walk'
	| 'ok'
	| 'boing';

module.exports = {
	data: new SlashCommandBuilder().addStringOption((option) =>
		option
			.setName('name')
			.setDescription('Which reaction?')
			.addChoices(
				{ name: 'Angry', value: 'angry' },
				{ name: 'Ara ara~', value: 'araara' },
				{ name: 'Evil', value: 'evil' },
				{ name: 'Holy light!', value: 'holylight' },
				{ name: 'Laugh', value: 'laugh' },
				{ name: 'Nani?!?', value: 'nani' },
				{ name: 'Nice', value: 'nice' },
				{ name: 'Run', value: 'run' },
				{ name: 'Walk', value: 'walk' },
				{ name: 'OK!', value: 'ok' },
				{ name: 'Boing', value: 'boing' }
			)
			.setRequired(true)
	) as SlashCommandBuilder,
	options: {
		name: 'react',
		description: '>.<',
		category: 'Raphiel Reacts',
	},
	async execute(interaction) {
		const name = (
			interaction.options as CommandInteractionOptionResolver
		).getString('name');

		if (!name) {
			return await interaction.reply({
				embeds: [Utils.errorEmbed('You must specify a reaction.')],
				ephemeral: true,
			});
		}

		let image_id: string;
		switch (name as Reaction) {
			case 'angry': {
				image_id = 'iQoikVk';
				break;
			}
			case 'araara': {
				image_id = 'EaJl9Pv';
				break;
			}
			case 'evil': {
				image_id = '1id8sYE';
				break;
			}
			case 'holylight': {
				image_id = 'g6NAma1';
				break;
			}
			case 'laugh': {
				image_id = 'W1SwinD';
				break;
			}
			case 'nani': {
				image_id = 'nEFAbtT';
				break;
			}
			case 'nice': {
				image_id = 'kRz98EW';
				break;
			}
			case 'run': {
				image_id = 'iakudGA';
				break;
			}
			case 'walk': {
				image_id = 'Q1HIgTc';
				break;
			}
			case 'ok': {
				image_id = 'tib2cjI';
				break;
			}
			case 'boing': {
				image_id = 'Wi0cFW6';
				break;
			}
		}

		const embed = new EmbedBuilder()
			.setTitle(name == 'araara' ? 'Ara ara~' : null)
			.setImage(`https://i.imgur.com/${image_id}.gif`)
			.setColor(Color.PURPLE);

		return await interaction.reply({ embeds: [embed] });
	},
} satisfies Command;
