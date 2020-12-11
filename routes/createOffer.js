const createOffer = require('../models/createOffer')

module.exports = (app) =>{
    const createOffer =require('../controllers/createOffer')
    app.post('/createOffer/create', createOffer.create)
    app.put('/createOffer/update/:id',createOffer.update)
    app.get('/createOffer/getAll', createOffer.getAll)
    app.get('/createOffer/getOne/:id', createOffer.getOne)
    app.delete('/createOffer/deleteOne/:id',createOffer.deleteOne)
}