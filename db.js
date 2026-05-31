const { Pool } = require('pg');

const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'neondb',
    password: 'Αdmin', 
    port: 5432
});

module.exports = db;
