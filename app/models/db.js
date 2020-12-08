const dbConfig = require('../config/db.config');

const config = {
  server: dbConfig.HOST, // DESKTOP-VVN4PRG\\SQLEXPRESS
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DATABASE,
  port: dbConfig.PORT,
  "options": {
    "encrypt": true,
    "enableArithAbort": true,
    "synchronize": true,
    },
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
  }
};

module.exports = config;
