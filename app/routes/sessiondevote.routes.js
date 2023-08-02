const controller = require('../controllers/sessiondevote.controller')

module.exports = function (app) {
  app.get('/api/sessiondevote/:id', controller.findOne)
  app.get('/api/sessiondevote/', controller.findAll)
  app.post('/api/sessiondevote/', controller.create)
  app.put('/api/sessiondevote/:id', controller.update)
  app.delete('/api/sessiondevote/', controller.deleteAll)
  app.delete('/api/sessiondevote/:id', controller.delete)

  app.get('/api/sessiondevote/stats/get/:id', controller.getStats)

}
