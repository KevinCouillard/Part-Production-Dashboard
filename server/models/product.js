const { Sequelize, DataTypes } = require('sequelize');

const ProductModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const Product = sequelize.define('Product', {
        product_id: {type: INTEGER, primaryKey: true, autoIncrement: true},
        name: STRING,
        family: STRING,
        code: INTEGER
    })
    return Product
}

Product.associate = models => {
    Product.belongsTo(models.Tracking, {
        foreignKey: {
            allowNull: false
        }
    })
}

module.exports = ProductModel