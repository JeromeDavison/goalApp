var passportLocalMongoose = require('passport-local-mongoose');
var passport = require('passport');
var passportlocalmongoose = require('passport-local-mongoose');
const dbs = require('../database/database');
const path = require('path');


// use static authenticate method of model in LocalStrategy
passport.use(dbs.UserInfo.createStrategy());
// use static serialize and deserialize of model for passport session support
passport.serializeUser(dbs.UserInfo.serializeUser());
passport.deserializeUser(dbs.UserInfo.deserializeUser());



module.exports = function (app){
	//home route
	app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/index.html'));
});
app.post('/register', (req, res) => { //passport local registration 
dbs.UserInfo.register({username:req.body.username}, req.body.password, (err, succ) => {
	if (err){
		res.json({data:"Sorry, couldnt be registered!"});
	} else {
	passport.authenticate('local')(req,res, () => {
	res.json({data:"You've been signed up!"});
	});
	}
 });
});

app.post('/login', passport.authenticate('local'), (req, res) => { //authentication for regular login 

});
// retrieve goals from database
app.get('/getGoal', (req, res) => {
	dbs.GoalInfo.find({}, (err, succ)   =>     {
		  if (err){
			  res.json({data:"sorry, theres no more goals beyond this"});
		  } else {
			res.json({data:succ});  	  
		  }
	})
	
})

//create goal with mood and comment
app.post('/goalnum', (req, res) => {
	let newGoal = new dbs.GoalInfo();
	// newGoal.userName = req.user; 
	newGoal.GoalName = req.body.goal;
	newGoal.mood = req.body.name
	newGoal.comment = req.body.comment
	
	newGoal.save().then(function(saved){
		console.log(saved)
		res.json({
			data:saved
		})
		
	})
.catch(function(fail){
	res.json({data:fail});
	
});
	
});

app.get('/listGoals', (req, res) => {
	// find and open goals
res.json({thing:"this is it"})
	
	
	// send them to json req
	
	
	
})



}	