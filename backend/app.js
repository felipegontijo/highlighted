// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware */

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('../src'));

/* Server Setup  */

// Determine the Port
const port = 3000;

// Spin up the server
const server = app.listen(port, listening);

// Callback function listening
function listening() {
    console.log(`Server running on localhost:${port}`);
}