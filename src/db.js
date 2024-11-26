const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables
const fs = require('fs');
// Create a MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.PORT || 3306,
  ssl: {
      ca: fs.readFileSync(process.env.DB_SSL_CA), // Load the CA certificate
  },
  waitForConnections: true,
  connectionLimit: 10, // Number of connections in the pool
  queueLimit: 0,
});

// Export a promise-based pool for query convenience
const db = pool.promise();
module.exports = db;
