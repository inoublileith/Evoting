const db = require('../models')
const Votant = db.votant
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.nom) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Votant.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Votant: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const { nom } = req.query
  let condition = nom ? { nom: { [Op.like]: `%${nom}%` } } : null
  Votant.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Votants.',
      })
    })
}
exports.findOne = (req, res) => {
  const id = req.params.id
  Votant.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Votant with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Votant with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Votant.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Votant was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Votant with id=${id}. Maybe Votant was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Votant with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Votant.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Votant was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Votant with id=${id}. Maybe Votant was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Votant with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Votant.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Votants were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Votants.',
      })
    })
}
