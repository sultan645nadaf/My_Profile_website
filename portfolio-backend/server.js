const express = require('express');
const cors = require('cors');
const db = require('./db'); // Ensure db.js exists

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('✅ Server is running! Use /track-view or /get-views');
});

// Get the client's IP address
const getClientIP = (req) => {
    return req.headers['x-forwarded-for'] || req.socket.remoteAddress;
};

// API to track unique views
app.get('/track-view', (req, res) => {
    const ip = getClientIP(req);

    const sql = 'INSERT IGNORE INTO views (ip_address) VALUES (?)';
    db.query(sql, [ip], (err, result) => {
        if (err) {
            console.error('❌ Error inserting view:', err);
            return res.status(500).send('Server error');
        }
        res.send('View recorded');
    });
});

// API to get total unique views
app.get('/get-views', (req, res) => {
    const sql = 'SELECT COUNT(*) AS total_views FROM views';
    db.query(sql, (err, result) => {
        if (err) {
            console.error('❌ Error fetching views:', err);
            return res.status(500).send('Server error');
        }
        res.json({ total_views: result[0].total_views });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});