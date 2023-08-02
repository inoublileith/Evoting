const controller = require('../controllers/vote.controller')

module.exports = function (app) {
  app.get('/api/vote/:id', controller.findOne)
  app.get('/api/vote/', controller.findAll)
  // app.post('/api/vote/', controller.create)
  app.post('/api/vote/:iduser/:idcandidature', controller.create)
  app.put('/api/vote/:id', controller.update)
  app.delete('/api/vote/', controller.deleteAll)
  app.delete('/api/vote/:id', controller.delete)
}
