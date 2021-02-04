//email store string null = false
//password store string null = false

module.exports = function (sequelize, DataTypes){

    const User = sequelize.define ('user', { //want the table to be named user
        email: { //here's where the columns are being defined - email & password
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return User;
} 