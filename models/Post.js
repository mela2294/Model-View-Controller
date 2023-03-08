const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extands Model { }

Post.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.TEXT
    },
    {
        sequelize
    }
);

module.exports = Post;