const controller = require('../controllers/votant.controller')

module.exports = function (app) {
  app.get('/api/votant/:id', controller.findOne)
  app.get('/api/votant/', controller.findAll)
  app.post('/api/votant/', controller.create)
  app.put('/api/votant/:id', controller.update)
  app.delete('/api/votant/', controller.deleteAll)
  app.delete('/api/votant/:id', controller.delete)
}
