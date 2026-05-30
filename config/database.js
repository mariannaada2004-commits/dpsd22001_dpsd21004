const { Pool } = require('pg');

const db = new Pool({
    host: process.env.DB_HOST || 'ep-flat-dawn-a26nshcl.eu-central-1.aws.neon.tech',
    user: process.env.DB_USER || 'neondb_owner',
    password: process.env.DB_PASSWORD || 'npg_8DeaERsuQTS4',
    database: process.env.DB_NAME || 'neondb',
    port: process.env.DB_PORT || 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = db;
