import { EmbedBuilder } from 'discord.js';

import Color from './Colors';
import Emote from './Emote';

class Utils {
	/**
	 * Get a random integer between minimum and maximum. *(both included)*
	 * @param max max number
	 * @param min min number `(default: 0)`
	 * @returns the random integer
	 */
	static getRandom(max: number, min = 0) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	static errorEmbed(message: string) {
		return new EmbedBuilder()
			.setDescription(`${Emote.CROSS} ${message}`)
			.setColor(Color.LIGHTRED);
	}
}

export default Utils;
