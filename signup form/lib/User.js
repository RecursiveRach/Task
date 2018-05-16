var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	username: {type: String, required: true, unique: true},
	gender: {type: String, enum: ["Male", "Female"]},
	email: String,
	mobile: {type: Number, required: true},
	password: {type: String,required: true}
});

var User = mongoose.model('myuser', userSchema);
module.exports = User;