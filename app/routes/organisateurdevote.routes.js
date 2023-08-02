const controller = require('../controllers/organisateurdevote.controller')

module.exports = function (app) {
  app.get('/api/organisateurdevote/:id', controller.findOne)
  app.get('/api/organisateurdevote/', controller.findAll)
  app.post('/api/organisateurdevote/', controller.create)
  app.put('/api/organisateurdevote/:id', controller.update)
  app.delete('/api/organisateurdevote/', controller.deleteAll)
  app.delete('/api/organisateurdevote/:id', controller.delete)

  app.put('/api/organisateurdevote/bloquer/:id', controller.bloquerUser)
  app.put('/api/organisateurdevote/autoriser/:id', controller.autoriserUser)

}
