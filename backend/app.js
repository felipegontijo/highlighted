// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
const cors = require('cors');

/* Middleware */

// use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('../src'));

/* Server Setup  */

const port = 3000;

const server = app.listen(port, listening);

function listening() {
    console.log(`Server running on localhost:${port}`);
}

/* Routes */

let notes = [];

app.get('/api/notes', sendData);

function sendData(request, response) {
    response.send(notes);
}

app.post('api/add', addData);

function addData(request, response) {
    notes.push({
        url: request.body.url,
        title: request.body.title,
        content: request.body.content
    });
    response.status(200);
}