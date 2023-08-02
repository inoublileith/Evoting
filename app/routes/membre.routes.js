const controller = require('../controllers/membre.controller')

module.exports = function (app) {
  app.get('/api/membre/:id', controller.findOne)
  app.get('/api/membre/', controller.findAll)
  app.get('/api/membre/programme/:id', controller.getAllByIdP)
  app.post('/api/membre/', controller.create)
  app.put('/api/membre/:id', controller.update)
  app.delete('/api/membre/', controller.deleteAll)
  app.delete('/api/membre/:id', controller.delete)
}
