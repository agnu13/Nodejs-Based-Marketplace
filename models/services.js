
var mongoose = require('mongoose');
// User Schema

var ServiceSchema = new mongoose.Schema({
	name: {
		type: String
	},
	desc: {
		type: String
	},
	price : {
		type: String
	}
});

var Service = module.exports = mongoose.model('Service', ServiceSchema);

