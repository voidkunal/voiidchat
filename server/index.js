const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Corrected 'cros' to 'cors'
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

const PORT = process.env.PORT || 8080;

app.get('/', (request, response) => {
    response.json({
        message: " Void server running at " + PORT
    });
});

app.listen(PORT, () => {
    console.log(" server running at " + PORT);
});
