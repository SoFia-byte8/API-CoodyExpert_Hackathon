const mongoose =require('mongoose');
const config = require('./config')
const conectDB = ()=>{
   
    mongoose.connect(config.mongoDB,{
        useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
            if(error){
                console.log('Error',error)
            }else{
                console.log('Nos conectamos con exito a la DB de coodyExpert.')
            }
        })
}
module.exports={conectDB} 