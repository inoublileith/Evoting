const { authJwt } = require('../middleware')
const controller = require('../controllers/utilisateur.controller')
module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })
  app.get('/api/namespace/public', controller.allAccess)
  app.get('/api/namespace/user', [authJwt.verifyToken], controller.userBoard)
  
  app.get(
    '/api/namespace/admin',
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  )
  
  app.get(
    '/api/namespace/votant',
    [authJwt.verifyToken, authJwt.isVotant],
    controller.votantBoard
  )
  app.get(
    '/api/namespace/candidat',
    [authJwt.verifyToken, authJwt.isCandidat],
    controller.candidatBoard
  )
  app.get(
    '/api/namespace/organisateurdevote',
    [authJwt.verifyToken, authJwt.isOrganisateurdevote],
    controller.organisateurdevoteBoard
  )
   app.get(
     `/api/user/info/:id`,
     controller.getUserInfo
   )
}
