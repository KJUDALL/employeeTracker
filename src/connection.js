//env credentials
//establish connection with postgress
import pg from 'pg';
const { Pool } = pg;

import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: process.env.DB_NAME,
    port: 5433
});

const connectToDb = async () => {
    try {
        await pool.connect();
        console.log('Connected to the DB.');
    } catch (err) {
        console.error('Failed to connect to the DB:', err);
        process.exit(1);
    }
};

export { pool, connectToDb };

