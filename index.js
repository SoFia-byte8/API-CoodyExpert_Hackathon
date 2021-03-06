const express = require('express'); 
const cors = require('cors')
const bodyParser = require('body-parser')
const {conectDB} =require('./db'); 
const app =express()
app.use(cors())
app.use(bodyParser.json())
const port=process.env.PORT || 8080
conectDB(); 
require('./routes/user')(app)
require('./routes/recruit')(app)
require('./routes/postulation')(app)
require('./routes/notification')(app)
require('./routes/createOffer')(app)
require('./routes/company')(app)
require('./routes/exam')(app)
app.listen( port,()=>{
    console.log('El servidor se levando correctamente Coody')
})


