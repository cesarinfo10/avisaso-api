const mysql = require('mysql2');
export const CONEXION =
     mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: null,
      database: 'avisaso_db'
  });