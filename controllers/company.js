const CompanyModel =require('../models/company')
const service = require('../services/indexCompany')
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {

       return res.status(400).send({
          message: 'los datos son obligatorios'

      })
    }
    const company = new CompanyModel({
        nameCompany: req.body.nameCompany,
        nitCompany:  req.body.nitCompany,
        phoneCompany:  req.body.phoneCompany,
        email: req.body.email,
        password:req.body.password,
        role: req.body.role,
        tipo: req.body.tipo

    })   
    company.save()
        .then((dataCompany) => { res.send(dataCompany) })
        .catch((error) => {
            res.status(500).send({
                message: error.message

    })
})
}
 exports.update=(req,res)=>{
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
exports.getAll=(req,res)=>{
    CompanyModel.find()
    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}
exports.getOne=(req,res)=>{
    CompanyModel.findById(req.params.id)
    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
            res.status(500).send({
                message:error.message
            })
        }
    )
}
exports.deleteOne=(req,res)=>{
    CompanyModel.findByIdAndRemove(req.params.id)
    .then((company)=>{res.send(company)})
    .catch(
        (error)=>{
        res.status(500).send({
            message:error.message
        })
    })
}
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