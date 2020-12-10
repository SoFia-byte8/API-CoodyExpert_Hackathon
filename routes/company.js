module.exports = (app) => {//Exportar una funcion //recibimos el parametro app
    const company = require('../controllers/company')
    const isAuth= require('../middleware/authCompany')
    app.post('/company/create', company.create)
    app.put('/company/update/:id',isAuth.authCompany, company.update)
    app.get('/company/getAll', company.getAll)
    app.get('/company/getOne/:id', company.getOne)
    app.delete('/company/deleteOne/:id',company.deleteOne)
    app.post('/loginCompany',company.loginCompany)
}