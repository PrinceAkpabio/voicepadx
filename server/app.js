const express = require('express')
app = express();
require('dotenv').config()
const PORT = process.env.PORT || 3001
app.listen(PORT)


// ROUTES  
app.get('/api/', (req, res) => {
 res.json({
   hello: ["Prince", "Promise"]
  })
})
