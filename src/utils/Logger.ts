class Logger {
	public static warning(message: string) {
		console.log('[WARNING] ' + message);
	}

	public static info(message: string) {
		console.log('[INFO] ' + message);
	}

	public static error(message: string) {
		console.log('[ERROR] ' + message);
	}
}

export default Logger;
