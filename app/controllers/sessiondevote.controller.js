const db = require('../models')
const Sessiondevote = db.sessiondevote
const Op = db.Sequelize.Op
const sql = db.sequelize

exports.create = async (req, res) => {
  try {
    if (!req.body.libelle) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Sessiondevote.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Sessiondevote: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const { reference } = req.query
  let condition = reference
    ? { reference: { [Op.like]: `%${reference}%` } }
    : null
  Sessiondevote.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Sessiondevotes.',
      })
    })
}
exports.findOne = (req, res) => {
  const id = req.params.id
  Sessiondevote.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Sessiondevote with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Sessiondevote with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Sessiondevote.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Sessiondevote was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Sessiondevote with id=${id}. Maybe Sessiondevote was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Sessiondevote with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Sessiondevote.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Sessiondevote was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Sessiondevote with id=${id}. Maybe Sessiondevote was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Sessiondevote with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Sessiondevote.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Sessiondevotes were deleted successfully!`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while removing all Sessiondevotes.',
      })
    })
}

exports.getStats = async (req, res) => {
  const id = req.params.id
  const data = await sql
    .query(
      `SELECT votes.idcandidat, users.nom, users.prenom, COUNT(*) as count
      FROM votes, users where votes.idcandidat=users.id and idsession = ${id}
      GROUP BY idcandidat `
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
