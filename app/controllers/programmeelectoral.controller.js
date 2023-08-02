const db = require('../models')
const Programmeelctoral = db.programmeelectoral
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.titre) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Programmeelctoral.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Programmeelctoral: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const { titre } = req.query
  let condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null
  Programmeelctoral.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Programmeelctorals.',
      })
    })
}


exports.findOne = (req, res) => {
  const id = req.params.id
  Programmeelctoral.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Programmeelctoral with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Programmeelctoral with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Programmeelctoral.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Programmeelctoral was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Programmeelctoral with id=${id}. Maybe Programmeelctoral was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Programmeelctoral with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Programmeelctoral.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Programmeelctoral was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Programmeelctoral with id=${id}. Maybe Programmeelctoral was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Programmeelctoral with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Programmeelctoral.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Programmeelctorals were deleted successfully!`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while removing all Programmeelctorals.',
      })
    })
}
