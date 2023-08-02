const controller = require('../controllers/loi.controller')

module.exports = function (app) {
  app.get('/api/loi/:id', controller.findOne)
  app.get('/api/loi/', controller.findAll)
  app.post('/api/loi/', controller.create)
  app.put('/api/loi/:id', controller.update)
  app.delete('/api/loi/', controller.deleteAll)
  app.delete('/api/loi/:id', controller.delete)
}
