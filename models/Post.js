const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

// Initialize the Post model
Post.init(
  {
    // Define the model attributes (columns)
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  },
  {
    // Provide the sequelize connection
    sequelize,
  }
);

// Export the Post model
module.exports = Post;
