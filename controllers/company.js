const CompanyModel =require('../models/company') //estamos requiriendo el modelo
const service = require('../services/indexCompany')
/**
 * Metodo para registrar una nueva empresa
*/
exports.create = (req, res) => {
    //validamos que todos los datos del formulario esten llenos 
    //Object.entries= identificar cuales son los datos que tiene ese objeto
    if (Object.entries(req.body).length == 0) {
       return res.status(400).send({
          message: 'los datos son obligatorios'

      })
    }
//vamos a crear una nueva empresa
    const company = new CompanyModel({
        nameCompany: req.body.nameCompany,
        nitCompany:  req.body.nitCompany,
        phoneCompany:  req.body.phoneCompany,
        email: req.body.email,
        password:req.body.password,
        role: req.body.role,
        tipo: req.body.tipo
    })
    


   
    company.save()// save metodo de mongoose
        .then((dataCompany) => { res.send(dataCompany) })//si hace esto bien
        .catch((error) => {//si no ejecute el cath
            res.status(500).send({//estado 500 (error de servidor)-send
                message: error.message//este mensaje devolvera el error que mongoose tiene 
            })
        })
}

/**
 * Metodo para modificar una empresa
*/
 exports.update=(req,res)=>{
     //validacion de que todos los campos que se van a actualizar esten llenos 
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'

        })
    }


    const company = {
        nameCompany: req.body.nameCompany,
        nitCompany:  req.body.nitCompany,
        phoneCompany:  req.body.phoneCompany,
        email: req.body.email,
        password:req.body.password,
        role: req.body.role,
        tipo: req.body.tipo
 }
 //findByIdAndUpdate= metodo de mongoose que permite buscar por id y actualizar
 CompanyModel.findByIdAndUpdate(req.params.id, company)
        .then(
            (companyUpdate) => {
                res.send(companyUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}

/**
 * metodo para listar todas las empresas que estan en la plataforma
 */
exports.getAll=(req,res)=>{
    CompanyModel.find()//find criterio de busqueda cuando queremos algo en especifico
   
    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * Metodo para obtener una empresa por el id 
*/
exports.getOne=(req,res)=>{
    CompanyModel.findById(req.params.id)//findById Busque por el id

    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * Metodo para eliminar una empresa
*/
exports.deleteOne=(req,res)=>{
    CompanyModel.findByIdAndRemove(req.params.id)
    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
        res.status(500).send({
            message:error.message
        })
    }

    )
}

/**
 * Metodo para loguearse
 */
exports.loginCompany= (req, res) =>{
    CompanyModel.findOne({email:req.body.email},(error, dataCompany)=>{
        if (dataCompany != null) {
            if (dataCompany.password == req.body.password) {
                res.send({token: service.createToken(dataCompany)})    
            }else{
                res.status(400).send({
                    message: 'Los datos no coinciden'
                })
            }
            
        }else{
            res.status(400).send({
                message: 'Los datos no coinciden'
            })
        }
    })
}