import { Events } from 'discord.js';

import { Listener } from '../types';
import Logger from '../utils/Logger';

module.exports = {
	event: Events.ClientReady,
	options: {
		isOnce: true,
	},
	execute(client) {
		Logger.info('------------------------------------');
		Logger.info(`+ Bot Name: ${client.user.displayName}`);
		Logger.info(`+ Bot ID: ${client.user.id}`);
		Logger.info(`+ Bot running on: ${client.guilds.cache.size} server(s)`);
		Logger.info('------------------------------------');
	},
} as Listener<Events.ClientReady>;
