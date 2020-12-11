const RecruitModel = require('../models/recruit');
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }
    const recruit = new RecruitModel({
        notify: req.body.notify,
        statusRecruit: req.body.statusRecruit,
        processRecruit: req.body.processRecruit
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
        notify: req.body.notify,
        statusRecruit: req.body.statusRecruit,
        processRecruit: req.body.processRecruit
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
