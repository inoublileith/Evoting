const { sequelize } = require('../models')
const db = require('../models')
const Candidature = db.candidature
const User = db.user
const Op = db.Sequelize.Op
const sql = db.sequelize
exports.create = async (req, res) => {
  try {
    if (!req.body.iduser) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Candidature.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Candidature: ${error}`)
  }
}

exports.findAllbyIdSession = async (req, res) => {
  const id = req.params.id
  const data = await sql
    .query(
      `SELECT candidatures.id, candidatures.etat, users.id as iduser, users.nom, users.prenom, users.cin, candidatures.createdAt as date_ins FROM candidatures, users where users.id = candidatures.iduser and candidatures.idsession = ${id}`
    )
    .then((data) => {
      console.log('data : ', data[0])
      res.send(data[0])
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Candidatures.',
      })
    })
}


exports.findAll = async (req, res) => {
  const data = await sql
    .query(
      `SELECT candidatures.id as idcandidature, users.id as iduser, users.nom, users.prenom from users, candidatures where candidatures.iduser = users.id`
    )
    .then((data) => {
      console.log('data : ', data[0])
      res.send(data[0])
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Candidatures.',
      })
    })
}


exports.findOne = (req, res) => {
  const id = req.params.id
  Candidature.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Candidature with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Candidature with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Candidature.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Candidature was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Candidature with id=${id}. Maybe Candidature was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Candidature with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Candidature.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Candidature was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Candidature with id=${id}. Maybe Candidature was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Candidature with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Candidature.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Candidatures were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Candidatures.',
      })
    })
}

exports.validerCandidature = (req, res) => {
  const id = req.params.id
  Candidature.findByPk(id)
    .then((candidature) => {
      if (candidature.etat == 0) {
        candidature.update({ etat: 1 })
      } else {
        res.send({
          message: 'Candidature was updated successfully.',
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Candidature with id=' + id,
      })
    })
}
