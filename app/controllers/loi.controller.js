const db = require('../models')
const Loi = db.loi
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.type) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Loi.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Loi: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const { type } = req.query
  let condition = type ? { type: { [Op.like]: `%${type}%` } } : null
  Loi.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Lois.',
      })
    })
}
exports.findOne = (req, res) => {
  const id = req.params.id
  Loi.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Loi with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Loi with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Loi.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Loi was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Loi with id=${id}. Maybe Loi was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Loi with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Loi.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Loi was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Loi with id=${id}. Maybe Loi was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Loi with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Loi.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Lois were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Lois.',
      })
    })
}
