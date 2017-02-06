'use strict';
var mongoose = require('mongoose');


var hikingSchema = mongoose.Schema({
	name: String,
	country: String,
	state: String,
	mountain: String,
	elevation: Number,
	date_created: {
		type: Date, 
		default: Date.now
	}

});

module.exports = mongoose.model('Hikes', hikingSchema);


