import { ClientEvents, Collection } from 'discord.js';
import { Command, Listener } from './src/types';

export {};

declare global {
	namespace globalThis {
		var commands: Collection<string, Command>;
	}
}
