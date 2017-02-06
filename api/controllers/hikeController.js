'use strict';

var mongoose = require('mongoose');
Hike = mongoose.model('Hikes');

exports.get_all_hikes = function(req, res){
	Hike.find({}, function(err, hike){
		if (err)
			res.send(err);
		
		res.json(hike);
	});

};