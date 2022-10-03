const sequelize = require('sequelize');

var db = 'heroku_23178262b6400a9'

const connect = new sequelize(`${db}`, 'bb9a7d45d084fd', 'a5db1e75', {
    host: 'us-cdbr-east-06.cleardb.net',
    dialect: 'mysql',
    timezone: '-03:00'
})

module.exports = connect;