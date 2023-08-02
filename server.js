const express = require('express')
const cors = require('cors')
const app = express()
var corsOptions = {
  origin: 'http://localhost:9999',
}
app.use(cors(corsOptions))
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))
// simple route

const db = require('./app/models')
const Role = db.role
db.sequelize.sync().then(() => {
  console.log('Resync Db ...')
  initial()
})

function initial() {
  Role.create({
    id: 1,
    name: 'admin',
  })

  Role.create({
    id: 2,
    name: 'votant',
  })

  Role.create({
    id: 3,
    name: 'candidat',
  })

  Role.create({
    id: 4,
    name: 'organisateurdevote',
  })

  Role.create({
    id: 5,
    name: 'user',
  })
}

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to INFOESPRIT WORLD.' })
})



const authRouter = require('./app/routes/auth.routes')
authRouter(app)



const recommandationRouter = require('./app/routes/recommandation.routes')
recommandationRouter(app)
const userRouter = require('./app/routes/utilisateur.routes')
userRouter(app)
const candidatRouter = require('./app/routes/candidat.routes')
candidatRouter(app)
const candidatureRouter = require('./app/routes/candidature.routes')
candidatureRouter(app) 
const loiRouter = require('./app/routes/loi.routes')
loiRouter(app)
const membreRouter = require('./app/routes/membre.routes')
membreRouter(app)
const objectifRouter = require('./app/routes/objectif.routes')
objectifRouter(app)
const organisateurdevoteRouter = require('./app/routes/organisateurdevote.routes')
organisateurdevoteRouter(app)
const programmeelectoralRouter = require('./app/routes/programmeelectoral.routes')
programmeelectoralRouter(app)
const sessiondevoteRouter = require('./app/routes/sessiondevote.routes')
sessiondevoteRouter(app)
const votantRouter = require('./app/routes/votant.routes')
votantRouter(app)
const voteRouter = require('./app/routes/vote.routes')
voteRouter(app)

// set port, listen for requests
const PORT = process.env.PORT || 8088
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}.`)
  // initial()
})
