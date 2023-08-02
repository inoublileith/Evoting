const controller = require('../controllers/candidature.controller')

module.exports = function (app) {
  app.get('/api/candidature/one/:id', controller.findOne)
  app.get('/api/candidature/:id', controller.findAllbyIdSession)
  app.get('/api/candidature/', controller.findAll)
  app.post('/api/candidature/', controller.create)
  app.put('/api/candidature/:id', controller.update)
  app.delete('/api/candidature/', controller.deleteAll)
  app.delete('/api/candidature/:id', controller.delete)
  app.put('/api/candidature/valider/:id', controller.validerCandidature)
}
