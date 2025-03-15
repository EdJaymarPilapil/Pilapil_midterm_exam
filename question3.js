const express = require('express');
const app = express();
const port = 3000;

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Ed Jaymar B. Pilapil' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});