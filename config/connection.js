// Importing the Sequelize library
const Sequelize = require('sequelize');

// Importing the 'dotenv' library to load environment variables from a '.env' file
require('dotenv').config();

// Creating a new Sequelize instance with the database configuration
const sequelize = new Sequelize(
  process.env.DB_NAME,        
  process.env.DB_USER,        
  process.env.DB_PASSWORD,    
  {
    host: 'localhost',        
    dialect: 'mysql',         
    port: 3306,               
  }
);

// Exporting the sequelize instance to be used in other parts of the application
module.exports = sequelize;
