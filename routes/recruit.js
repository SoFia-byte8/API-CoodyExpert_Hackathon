module.exports = (app) =>{
    const recruit = require('../controllers/recruit')
    app.post('/recruit/create', recruit.create)
    app.put('/recruit/update/:id', recruit.update)
}