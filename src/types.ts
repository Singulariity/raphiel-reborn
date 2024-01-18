import {
	Awaitable,
	ClientEvents,
	CommandInteraction,
	SlashCommandBuilder,
} from 'discord.js';

export type Command = {
	data: SlashCommandBuilder;
	options: {
		name: string;
		description: string;
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
