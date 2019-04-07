const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");



var User = new Schema({ // user data 
	username: String,
	password: String
})

var Goal = new Schema ({
	GoalName: String,
	goalId: String,
	userName:String
})

var Information = new Schema({ //information with mood linked with comment
	mood:String,
	comment:String
});


User.plugin(passportLocalMongoose); // export accordingly

let Info = mongoose.model('Info', Information);
let UserInfo = mongoose.model('User', User);
let GoalInfo1 = mongoose.model('Goal', Goal);
module.exports = {
	UserInfo: UserInfo,
	Info: Info,
	GoalInfo:GoalInfo1
}
 