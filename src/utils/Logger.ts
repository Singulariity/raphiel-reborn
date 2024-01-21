import { Client, MessageCreateOptions, MessagePayload } from 'discord.js';

import Config from '../config';

class Logger {
	public static warning(message: string) {
		console.log(colored('[WARNING] ', ConsoleColor.YELLOW_FG) + message);
	}

	public static info(message: string) {
		console.log(colored('[INFO] ', ConsoleColor.BLUE_FG) + message);
	}

	public static error(message: string) {
		console.log(colored('[ERROR] ', ConsoleColor.RED_FG) + message);
	}

	public static async log(
		client: Client,
		message: string | MessagePayload | MessageCreateOptions
	) {
		const channel = await client.channels.fetch(Config.LOG_CHANNEL_ID);

		if (!channel || !channel.isTextBased()) {
			this.error('LOG CHANNEL NOT FOUND!');
			return;
		}

		return await channel.send(message);
	}
}

function colored(message: string, color: ConsoleColor) {
	return color + message + ConsoleColor.RESET;
}

enum ConsoleColor {
	RESET = '\x1b[0m',
	BRIGHT = '\x1b[1m',
	DIM = '\x1b[2m',
	UNDERSCORE = '\x1b[4m',
	BLINK = '\x1b[5m',
	REVERSE = '\x1b[7m',
	HIDDEN = '\x1b[8m',

	BLACK_FG = '\x1b[30m',
	RED_FG = '\x1b[31m',
	GREEN_FG = '\x1b[32m',
	YELLOW_FG = '\x1b[33m',
	BLUE_FG = '\x1b[34m',
	MAGENTA_FG = '\x1b[35m',
	CYAN_FG = '\x1b[36m',
	WHITE_FG = '\x1b[37m',
	GRAY_FG = '\x1b[90m',

	BLACK_BG = '\x1b[40m',
	RED_BG = '\x1b[41m',
	GREEN_BG = '\x1b[42m',
	YELLOW_BG = '\x1b[43m',
	BLUE_BG = '\x1b[44m',
	MAGENTA_BG = '\x1b[45m',
	CYAN_BG = '\x1b[46m',
	WHITE_BG = '\x1b[47m',
	GRAY_BG = '\x1b[100m',
}

export default Logger;
