//https://sequelize.org/master/manual/getting-started.html#testing-the-connection


//connects to database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('workout-log', 'postgres', 'password', {
        host: 'localhost',
        dialect: 'postgres'
});

//verify to test if connection is ok
sequelize.authenticate().then(
    function() {
        console.log ('Connected to workout-log postgres database');
    },
    function(err) {
        console.log('Unable to connect to the database:', err);
    }
);

module.exports = sequelize;