const config = require('../config/db.config.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
})
const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./user.model.js')(sequelize, Sequelize)
db.role = require('../models/role.model.js')(sequelize, Sequelize)

db.candidat = require('./candidat.model.js')(sequelize, Sequelize)
db.candidature = require('./candidature.model.js')(sequelize, Sequelize)
db.loi = require('./loi.model.js')(sequelize, Sequelize)
db.membre = require('./membre.model.js')(sequelize, Sequelize)
db.objectif = require('./objectif.model')(sequelize, Sequelize)
db.organisateurdevote = require('./organisateurdevote.model.js')(sequelize, Sequelize)
db.programmeelectoral = require('./programmeelectoral.model.js')(sequelize, Sequelize)
db.sessiondevote = require('./sessiondevote.model.js')(sequelize, Sequelize)
db.votant = require('./votant.model.js')(sequelize, Sequelize)
db.vote = require('./vote.model.js')(sequelize, Sequelize)


db.refreshToken = require('../models/refreshToken.model.js')(
  sequelize,
  Sequelize
)

db.role.belongsToMany(db.user, {
  through: 'user_roles',
  foreignKey: 'roleId',
  otherKey: 'userId',
})

db.user.belongsToMany(db.role, {
  through: 'user_roles',
  foreignKey: 'userId',
  otherKey: 'roleId',
})

db.ROLES = [
  'user',
  'admin',
  'votant',
  'candidat',
  'organisateurdevote',
]
module.exports = db