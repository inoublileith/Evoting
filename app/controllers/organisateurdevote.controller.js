const db = require('../models')
const Organisateurdevote = db.organisateurdevote
const User = db.user
const Op = db.Sequelize.Op
const sql = db.sequelize

exports.create = async (req, res) => {
  try {
    if (!req.body.fonction) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Organisateurdevote.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Organisateurdevote: ${error}`)
  }
}

exports.findAll = async (req, res) => {
  // const id = req.params.id
  const data = await sql
    .query(
      `SELECT users.etat, users.nom, users.prenom, users.cin, users.email, organisateurdevotes.id, organisateurdevotes.fonction, organisateurdevotes.grade, organisateurdevotes.organisme FROM users, organisateurdevotes WHERE users.id = organisateurdevotes.id`
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
  Organisateurdevote.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Organisateurdevote with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Organisateurdevote with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Organisateurdevote.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Organisateurdevote was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Organisateurdevote with id=${id}. Maybe Organisateurdevote was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Organisateurdevote with id=' + id,
      })
    })
}

exports.bloquerUser = (req, res) => {
  const id = req.params.id
  User.update(
    { etat: 0 },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Organisateurdevote was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Organisateurdevote with id=${id}. Maybe Organisateurdevote was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Organisateurdevote with id=' + id,
      })
    })
}

exports.autoriserUser = (req, res) => {
  const id = req.params.id
  User.update(
    { etat: 1 },
    {
      where: { id: id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Organisateurdevote was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Organisateurdevote with id=${id}. Maybe Organisateurdevote was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Organisateurdevote with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Organisateurdevote.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Organisateurdevote was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Organisateurdevote with id=${id}. Maybe Organisateurdevote was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Organisateurdevote with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Organisateurdevote.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Organisateurdevotes were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Organisateurdevotes.',
      })
    })
}
