const controller = require('../controllers/recommandation.controller')

module.exports = function (app) {
  app.get('/api/recommandation/:id', controller.findOne)
  app.get('/api/recommandation/', controller.findAll)
  app.post('/api/recommandation/', controller.create)
  app.put('/api/recommandation/:id', controller.update)
  app.delete('/api/recommandation/', controller.deleteAll)
  app.delete('/api/recommandation/:id', controller.delete)
}
