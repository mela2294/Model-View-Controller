const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Comment extends Model { }

Comment.init(
    {
        body: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize
    }
);

module.exports = Comment;