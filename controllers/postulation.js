const PostulationModel =require('../models/postulation') //estamos requiriendo el modelo

exports.create = (req, res) => {
    //validamos que todos los datos del formulario esten llenos
    if (Object.entries(req.body).length == 0) {
       return res.status(400).send({
          message: 'los datos son obligatorios'

      })
    }
//vamos a crear una nueva postulacion
    const postulation = new PostulationModel({
        titlePostulation: req.body.titlePostulation,
        description:  req.body.description,
        cargo:  req.body. cargo,
        salary: req.body.salary,
        languaje:req.body.languaje
    })
    


   
    postulation.save()// save metodo de mongoose
        .then((dataPostulation) => { res.send(dataPostulation) })//si hace esto bien
        .catch((error) => {//si no ejecute el cath
            res.status(500) - send({//estado 500 (error de servidor)
                message: error.message//este mensaje devolvera el error que mongoose tiene 
            })
        })
}

/**
 * Metodo para actualizar una empresa
 */

 exports.update=(req,res)=>{
     //validacion de que todos los campos que se van a actualizar esten llenos 
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'los datos son obligatorios'

        })
    }

    const postulation= {
        titlePostulation: req.body.titlePostulation,
        description:  req.body.description,
        cargo:  req.body. cargo,
        salary: req.body.salary,
        languaje:req.body.languaje
 }
 //findByIdAndUpdate= metodo de mongoose que permite buscar por id y actualizar
 PostulationModel.findByIdAndUpdate(req.params.id, postulation)
        .then(
            (postulationUpdate) => {
                res.send(postulationUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}
