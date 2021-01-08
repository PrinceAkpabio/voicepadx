const express = require('express')
app = express();
require('dotenv').config()

app.set('view engine', 'ejs')

// ROUTES  

app.use('/', require('./routes/home'))
app.use('/api/', require('./routes/hello'))

// app.get('/api/', (req, res) => {
//  res.json({
//   "Hello": "Prince"
//  })
// })

// app.get('*', (res, req) => {
//  res.sendFile(path.join(__dirname + '../client/voicepad/public/index.html'))
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
 console.log(`Listening on port:  ${PORT}`);
})