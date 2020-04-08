// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const Note = require('./model/note');

/* Connect Mongoose */

const mongoose = require('mongoose');
const uri = 'mongodb+srv://admin:XzR6L3DjxiDNzkQ3@highlighted-cluster-ylsrs.mongodb.net/test?retryWrites=true&w=majority';
const options = [
    { useNewUrlParser: true },
];
mongoose.connect(uri, ...options)
    .then(() => {
        console.log('Connection to database successful');
    })
    .catch((error) => {
        console.log('Connection to database failed', error);
    })
;
mongoose.set('useUnifiedTopology', true);

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

app.post('/api/add', addData);

function addData(request, response) {
    const note = new Note({
        url: request.body.url,
        title: request.body.title,
        content: request.body.content
    });
    note.save(); // mongoose function -- automatically creates collection and saves new note to database 'test'
    response.status(201);
}

app.get('/api/notes', sendData);

function sendData(request, response) {
    Note.find()
        .then((docs) => {
            response.send(docs);
        })
        .catch((err) => {
            console.log(err, 'error');
        })
    ;
}
