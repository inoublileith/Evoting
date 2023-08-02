const controller = require('../controllers/candidat.controller')

module.exports = function (app) {
  app.get('/api/candidat/:id', controller.findOne)
  app.get('/api/candidat/', controller.findAll)
  app.post('/api/candidat/', controller.create)

  app.put('/api/candidat/bloquer/:id', controller.bloquerUser)
  app.put('/api/candidat/autoriser/:id', controller.autoriserUser)
  
  app.put('/api/candidat/:id', controller.update)
  app.delete('/api/candidat/', controller.deleteAll)
  app.delete('/api/candidat/:id', controller.delete)
}
