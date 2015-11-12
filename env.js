'use strict';

const config = {
	livefyre: {
		network: {
			name: process.env['LIVEFYRE_NETWORK_NAME'],
			key: process.env['LIVEFYRE_NETWORK_KEY']
		}
	},
	db: {
		url: process.env['DATABASE_URL'],
		ssl: (process.env['DATABASE_SSL'] == 'true')
	},
	suds: {
		url: process.env['SUDS_URL']
	}
};

module.exports = config;
