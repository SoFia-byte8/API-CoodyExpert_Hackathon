module.exports = (app) =>{
    const user =require('../controllers/user')
    const isAuth=require('../middleware/auth')

    app.post('/user/create',user.create)
    app.put('/user/update/:id',isAuth.auth, user.update)
    app.get('/user/getAll',user.getAll)
    app.get('/user/getOne/:id',user.getOne)
    app.delete('/user/deleteOne/:id',user.deleteOne)
    app.post('/login', user.login)
}