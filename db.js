const { Pool } = require('pg');

const pool = new Pool({
  host: 'ep-patient-union-alkhfoop-pooler.c-3.eu-central-1.aws.neon.tech',
  port: 5432,
  database: 'neondb',
  user: 'neondb_owner',
  password: 'npg_8DeaERsuQTS4',
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;
