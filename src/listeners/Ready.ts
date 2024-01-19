import { ActivityType, Events } from 'discord.js';

import { Listener } from '../types';
import { version } from '../../package.json';
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
		Logger.info(`+ Version: v${version}`);
		Logger.info(`+ Bot running on ${client.guilds.cache.size} server(s)`);
		Logger.info('------------------------------------');

		const activities = ['Hello hi hello!'];

		function activity() {
			let act = activities[Math.floor(Math.random() * activities.length)];

			client.user.setActivity({
				name: 'custom',
				state: `${act} | ${client.guilds.cache.size} servers | v${version}`,
				type: ActivityType.Custom,
			});

			setTimeout(() => {
				activity();
			}, 60 * 1000);
		}
		activity();
	},
} as Listener<Events.ClientReady>;
