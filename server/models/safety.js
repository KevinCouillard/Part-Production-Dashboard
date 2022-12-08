const { Sequelize, DataTypes } = require('sequelize');

const SafetyModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const Safety = sequelize.define('Safety', {
        case_id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        type: STRING,
        area: STRING,
        incident_date: DATE,
        process: STRING,
        originName: STRING,
        approveName: STRING,
        description: STRING(500),
        escalationName: STRING,
        targetDate: DATE,
        resolveDate: DATE
    })
    return Safety
}

module.exports = SafetyModel