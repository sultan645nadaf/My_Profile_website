const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Iphone@12', // Replace with your actual MySQL password
    database: 'portfolio'
});

db.connect(err => {
    if (err) {
        console.error('❌ MySQL Connection Failed:', err);
        return;
    }
    console.log('✅ Connected to MySQL Database');
});

module.exports = db;