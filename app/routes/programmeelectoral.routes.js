const controller = require('../controllers/programmeelectoral.controller')

module.exports = function (app) {
  app.get('/api/programmeelectoral/:id', controller.findOne)
  app.get('/api/programmeelectoral/', controller.findAll)
  app.post('/api/programmeelectoral/', controller.create)
  app.put('/api/programmeelectoral/:id', controller.update)
  app.delete('/api/programmeelectoral/', controller.deleteAll)
  app.delete('/api/programmeelectoral/:id', controller.delete)
}
