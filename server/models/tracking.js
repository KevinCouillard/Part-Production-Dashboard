const { Sequelize, DataTypes } = require('sequelize');

const TrackingModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE, TIME} = Sequelize
    const Tracking = sequelize.define('Tracking', {
        tracking_id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        user_id: INTEGER,
        product_id: INTEGER,
        operator: STRING,
        area: INTEGER,
        shift: INTEGER,
        date_tracked: DATE,
        time_tracked: TIME,
        target: INTEGER,
        cTarget: INTEGER,
        cActual: INTEGER,
        good: INTEGER,
        bad: INTEGER,
        badCode: STRING,
        downTime: INTEGER,
        dTimeCode: STRING,
        comment: STRING(500)
    })
    return Tracking
}

Tracking.associate = models => {
    Tracking.hasMany(models.User);

    Tracking.hasMany(models.Product);
}

module.exports = TrackingModel