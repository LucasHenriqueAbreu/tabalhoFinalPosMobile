/**
 * Info.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	schema: true,
	connection: "mongoData",
	attributes: {
		temp: 'string',
		lum: 'string',
		data: 'date',
		place: {
			model: 'place'
		}
	}
};

