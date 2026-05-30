const { Pool } = require('pg');

const db = new Pool({
    connectionString: 'postgres://neondb_owner:npg_8DeaERsuQTS4@ep-flat-dawn-a26nshcl.eu-central-1.aws.neon.tech/neondb',
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = db;
