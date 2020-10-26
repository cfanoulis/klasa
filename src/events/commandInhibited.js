const { Event } = require('@pengubot/klasa');

module.exports = class extends Event {

	run(message, command, response) {
		if (response && response.length) message.sendMessage(response);
	}

};
