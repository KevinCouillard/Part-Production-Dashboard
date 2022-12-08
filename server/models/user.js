const { Sequelize, DataTypes } = require('sequelize');

const UserModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const User = sequelize.define('User', {
        user_Id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        username: STRING,
        password: STRING,
        isManager: BOOLEAN
    })
    return User
}

User.associate = models => {
    User.belongsTo(models.Tracking, {
        foreignKey: {
            allowNull: false
        }
    })
}

module.exports = UserModel