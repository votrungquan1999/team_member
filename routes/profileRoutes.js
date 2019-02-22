module.exports = function (app) {
	var profileController = require('../controllers/profile');
	
	app.route('/view_profile/:profileId')
		.get(profileController.view_profile);
};