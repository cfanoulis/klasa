const { Serializer } = require('@pengubot/klasa');

module.exports = class extends Serializer {

	deserialize(data) {
		return String(data);
	}

};
