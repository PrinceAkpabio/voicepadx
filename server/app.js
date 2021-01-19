const express = require('express');
const path = require('path')
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config({
 path: '../.env'
})

app = express();
const PORT = process.env.PORT || 3001

app.use(express.static(path.join(__dirname, '../client/voicepad/build')))

// production 
if(process.env.NODE_ENV === 'production'){
 app.use(express.static(path.join(__dirname, '../client/voicepad/build'))); 
}


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

if (process.env.NODE_ENV !== 'production') {
 //build 
app.get('*', (req, res) => { res.sendFile(path.join(__dirname + '../client/voicepad/public/index.html')); })
}

if (process.env.NODE_ENV === 'production') {

 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname = '../client/voicepad/build/index.html'))
  })
}



app.listen(PORT, () => {
 console.log(`Listening on port:  ${PORT}`);
})



