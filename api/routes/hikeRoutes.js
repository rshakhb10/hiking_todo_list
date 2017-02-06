'use strict';

module.exports = function(app){
	var hikeList = require('../controllers/hikeController');

	app.route('/hikes')
		.get(hikeList.get_all_hikes)
		.post(hikeList.create_hike);

};