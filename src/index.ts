import { Client, ClientEvents, Collection, REST, Routes } from 'discord.js';
import { readdirSync } from 'fs';
import { exit } from 'process';
import path from 'path';
import 'dotenv/config';

import { Command, Listener } from './types';
import Logger from './utils/Logger';

async function main() {
	if (!process.env.TOKEN || !process.env.CLIENT_ID) {
		Logger.error('.env variables not provided correctly!');
		exit(1);
	}

	const client = new Client({
		intents: ['GuildMembers', 'DirectMessages', 'GuildVoiceStates'],
	});

	global.commands = new Collection<string, Command>();
	const listeners = new Collection<string, Listener<keyof ClientEvents>[]>();

	const getFiles = (dir: string) => {
		let commands_path = path.join(__dirname, dir);
		let items: string[] = [];

		let files = readdirSync(commands_path, {
			recursive: true,
		}).filter(
			(file_name) =>
				typeof file_name == 'string' && file_name.endsWith('.js')
		);
		for (let i = 0; i < files.length; i++) {
			let file = files[i];
			if (typeof file != 'string') continue;
			items.push(path.join(commands_path, file));
		}
		return items;
	};

	for (let path of getFiles('commands')) {
		let command = require(path) as Command;
		if ('data' in command && 'execute' in command) {
			command.data
				.setName(command.options.name)
				.setDescription(command.options.description);

			commands.set(command.data.name, command);
		} else {
			Logger.warning(
				`The command at "${path}" is missing a required "data" or "execute" property!`
			);
		}
	}

	for (let path of getFiles('listeners')) {
		let listener = require(path) as Listener;
		if ('event' in listener && 'execute' in listener) {
			let current = listeners.get(listener.event);
			if (current) {
				current.push(listener);
			} else {
				listeners.set(listener.event, [listener]);
			}

			if (listener.options.isOnce) {
				client.once(listener.event, listener.execute);
			} else {
				client.on(listener.event, listener.execute);
			}
		} else {
			Logger.warning(
				`The listener at "${path}" is missing a required "event" or "execute" property!`
			);
		}
	}

	async function deployCommands() {
		const rest = new REST().setToken(process.env.TOKEN!);

		try {
			Logger.info(
				`Updating ${commands.size} application (/) commands...`
			);

			const data = await rest.put(
				Routes.applicationCommands(process.env.CLIENT_ID!),
				{
					body: commands.map((command) => command.data.toJSON()),
				}
			);

			Logger.info(
				`Successfully updated ${
					(data as []).length
				} application (/) commands.`
			);
		} catch (error) {
			console.log(error);
		}
	}

	await deployCommands();

	client.login(process.env.TOKEN);
}

main();
