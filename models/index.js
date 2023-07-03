const User = require('./User');

const Post = require('./Post');

const Comment = require('./Comment');

// Define associations between models

// A Post belongs to a User (user_id is a foreign key in Post table)
Post.belongsTo(User, {

    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// A Post has many Comments (post_id is a foreign key in Comment table)
Post.hasMany(Comment, {

    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

// A Comment belongs to a User (user_id is a foreign key in Comment table)
Comment.belongsTo(User, {
    
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Export the User, Post, and Comment models
module.exports = { User, Post, Comment };
