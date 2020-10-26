const { Event } = require('@pengubot/klasa');

module.exports = class extends Event {

	run(log) {
		this.client.console.verbose(log);
	}

	init() {
		if (!this.client.options.consoleEvents.verbose) this.disable();
	}

};
