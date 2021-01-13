const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config()

app = express();
const PORT = process.env.PORT || 3001

app.use(cors());
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



