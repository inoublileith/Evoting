const db = require('../models')
const User = db.user
const Op = db.Sequelize.Op


exports.getUserInfo = (req, res) => {
  const id = req.params.id
  User.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving User with id=' + id,
      })
    })
}


exports.allAccess = (req, res) => {
  res.status(200).send('Vote Electronique')
}
exports.userBoard = (req, res) => {
  res.status(200).send('User Content.')
}
exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.')
}
exports.votantBoard = (req, res) => {
  res.status(200).send('Votant Content.')
}
exports.candidatBoard = (req, res) => {
  res.status(200).send('Candidat Content.')
}
exports.organisateurdevoteBoard = (req, res) => {
  res.status(200).send('Organisateurdevote Content.')
}
