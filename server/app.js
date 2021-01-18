const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config({
 path: '../.env'
})

app = express();
const PORT = process.env.PORT || 3001

let corsOption = {
 origin: `http://localhost:${PORT}`
}

app.use(cors(corsOption.origin));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
 useNewUrlParser: true, useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
 console.log('MongoDB database connection established successfully');
})


// ROUTES
const userRouter = require('./routes/users')
const notesRouter = require('./routes/notes')


// USERS ROUTE
app.use('/users', userRouter);

// NOTES ROUTE
app.use('/notes', notesRouter)




app.listen(PORT, () => {
 console.log(`Listening on port:  ${PORT}`);
})



