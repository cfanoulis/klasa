const { Event } = require('../index');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, 'disconnect');
	}

	run(err) {
		this.client.emit('log', `Disconnected | ${err.code}: ${err.reason}`, 'error');
	}

};