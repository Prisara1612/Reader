const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pri@1612",
  database: "blog"
});

// Define the connect function
const connectDB = () => {
  db.connect(error => {
    if (error) {
      console.error('Error connecting to the database:', error.stack);
      return;
    }
    console.log('Connected to the database');
  });
};

// Export both the database connection and the connect function
module.exports = { db, connectDB };
