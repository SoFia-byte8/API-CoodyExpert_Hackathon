module.exports = (app) => {
    const postulation = require('../controllers/postulation')
    app.post('/postulation/create', postulation.create)
    app.put('/postulation/update/:id', postulation.update)
}