module.exports = (app) => {
    const exam = require('../controllers/exam')
    app.post('/exam/create', exam.create)
    app.put('/exam/update/:id', exam.update)
    app.get('/exam/getAll', exam.getAll)
    app.get('/exam/getOne/:id', exam.getOne)
    app.delete('/exam/deleteOne/:id', exam.deleteOne)
}