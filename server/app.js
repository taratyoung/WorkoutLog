require("dotenv").config();
let express = require('express');
let app = express();
let sequelize = require('./db');

let log = require('./controllers/logcontroller');
let user = require('./controllers/usercontroller');

sequelize.sync();//method to ensure all models (tables) are actually put onto the db if they're not there
//sequelize.sync({force: true})

app.use(express.json());

//Exposed Route
app.use('/user', user);

//Protected Route
app.use(require('./middleware/validate-session'));  //Is this the line to delete 12.2.2???
app.use('/log', log);


// app.use('/test', function(req, res) {
//     res.send('This is a message from the WORKOUTLOG test endpoint on the server!')
// });









//need to always put my code in-between the listen and the variable above

app.listen(3000, function() { 
    console.log("App is listening on port 3000");
});