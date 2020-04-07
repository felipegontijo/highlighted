// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const Note = require('./model/note');

/* Connect Mongoose */

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:wdbXbQZgG1J9wVax@highlighted-cluster-ylsrs.mongodb.net/test?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connection to database successful');
    })
    .catch(() => {
        console.log('Connection to database failed');
    })

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

app.get('/api/notes', sendData);

function sendData(request, response) {
    response.send(notes);
}

app.post('/api/add', addData);

function addData(request, response) {
    const note = new Note({
        url: request.body.url,
        title: request.body.title,
        content: request.body.content
    });
    response.status(201);
}