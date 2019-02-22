profiles = [{id: 'hung', name: 'Hung Nguyen', linkedIn: 'abc', description: 'def'},
			{id: 'gaurav', name:'Gaurav Jayasawal', linkedIn: 'abc', description: 'def'},
			{id: 'gonzalo', name: 'Gonzalo Reyes', linkedIn: 'abc', description: 'def'}];

exports.view_profile = function (req, res) {
	for (var i=0; i < profiles.length; i++){
		var profile = profiles[i];
		if (profile.id === req.params.profileId){
			var output = {name: profile.name, linkedIn: profile.linkedIn, description: profile.description};
			res.json(output);
			break;
		}
	}
	res.send({errorMessage: "can not find profile with given id"});
};