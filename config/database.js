const db = new Pool({
    user: 'postgres',                             // Ο default χρήστης στο PC σου
    host: 'localhost',                            // Τρέχει τοπικά
    database: 'neondb',                           // Η βάση που φτιάχνουμε στο pgAdmin
    password: 'Admin', // π.χ. 'admin' ή 'root'
    port: 5432
    // ΠΡΟΣΟΧΗ: Εδώ ΔΕΝ βάζουμε ssl: { rejectUnauthorized: false }, το σβήνουμε τελείως για το PC!
});

module.exports = db;
