const RecruitModel = require('../models/recruit');
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const recruit = new RecruitModel({
        notificar: req.body.notificar,
        estadoPstulante: req.body.estadoPstulante,
        procesoPostulante: req.body.procesoPostulante
    })
    recruit.save().then((dataRecruit) => {
        res.send(dataRecruit)
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
    const recruit = {
        notificar: req.body.notificar,
        estadoPstulante: req.body.estadoPstulante,
        procesoPostulante: req.body.procesoPostulante
    }    
    RecruitModel.findByIdAndUpdate(req.params.id, recruit)
        .then(
            (recruitUpdate) => {
                res.send(recruitUpdate)
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            })
}
