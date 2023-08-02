const controller = require('../controllers/objectif.controller')

module.exports = function (app) {
  app.get('/api/objectif/one/:id', controller.findOne)
  app.get('/api/objectif/:id', controller.findAll)
  app.post('/api/objectif/', controller.create)
  app.put('/api/objectif/:id', controller.update)
  app.delete('/api/objectif/', controller.deleteAll)
  app.delete('/api/objectif/:id', controller.delete)
}
