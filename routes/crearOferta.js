module.exports = (app) =>{
    const crearOferta =require('../controllers/crearOferta')
    app.post('/crearOferta/create',crearOferta.create)
    app.put('/crearOferta/update/:id',crearOferta.update)
    app.get('/crearOferta/getAll', crearOferta.getAll)
    app.get('/crearOferta/getOne/:id', crearOferta.getOne)
    app.delete('/crearOferta/deleteOne/:id',crearOferta.deleteOne)
}