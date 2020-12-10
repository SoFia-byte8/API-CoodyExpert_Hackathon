const CreateOfferModel = require('../models/createOffer');
exports.create = (req,res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message:'Los datos son obligatorios.'
        })
    }
    const createOffer = new CreateOfferModel({
        title:req.body.title,
        description:req.body.description,
        charge:req.body.charg,
        salary:req.body.salary,
        locationn:req.body.location,
        endDate:req.body.endDate 
    })

    createOffer.save().then((dataoffer) => {
        res.send(dataoffer)
    }).catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}

exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const createOffer = {
        title:req.body.title,
        description:req.body.description,
        charge:req.body.charg,
        salary:req.body.salary,
        locationn:req.body.location,
        endDate:req.body.endDate 
    }
    
    CreateOfferModel.findByIdAndUpdate(req.params.id, createOffer)
        .then(
            (offerUpdate) => {
                res.send(offerUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
}

exports.getAll = (req, res) => {
    CreateOfferModel.find()
        .then((offer) => {
            res.send(offer)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })

}


exports.getOne = (req, res) => {
    CreateOfferModel.findById(req.params.id)
        .then((offer) => {
            res.send(offer)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

exports.deleteOne=(req,res)=>{
    CreateOfferModel.findByIdAndRemove(req.params.id)
    .then((offerdelete) => {
        res.send(offerdelete)
    })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}



