const express = require('express'); 
const cors = require('cors')
const bodyParser = require('body-parser')
const {conectDB} =require('./db'); 


const app =express()
app.use(cors())
app.use(bodyParser.json())
const port=process.env.PORT || 8080

conectDB(); //conectamos base de datos 
require('./routes/user')(app)
require('./routes/recruit')(app)
require('./routes/postulation')(app)
require('./routes/notification')(app)
require('./routes/crearOferta')(app)
require('./routes/company')(app)


app.listen( port,()=>{
    console.log('El servidor se levando correctamente Coody')
    
})


