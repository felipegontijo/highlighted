// Use Express
const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware */
// use body-parser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize main project folder
app.use(express.static('website'));

// determine our port
const port = 8000;
// start the server
const server = app.listen(port, listening);
// callback funcion that logs the port number when server runs
function listening() {
    console.log(`server running on localhost: ${port}`);
}