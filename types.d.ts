import {
	Awaitable,
	ClientEvents,
	Collection,
	CommandInteraction,
	SlashCommandBuilder,
} from 'discord.js';

export type CommandCategory =
	| 'Core'
	| 'Fun'
	| 'Information'
	| 'Moderation'
	| 'Raphiel Reacts'
	| 'NSFW'
	| 'Special'
	| 'Other'
	| undefined;

export type Command = {
	data: SlashCommandBuilder;
	options: {
		name: string;
		description: string;
		category?: CommandCategory;
		nsfw?: boolean;
	};
	execute: (interaction: CommandInteraction) => void;
};

export type Listener<Event extends keyof ClientEvents = any> = {
	event: Event;
	options: {
		isOnce?: boolean;
	};
	execute: (...args: ClientEvents[Event]) => Awaitable<void>;
};

declare module 'discord.js' {
	export interface Client {
		commands: Collection<string, Command>;
	}
}
