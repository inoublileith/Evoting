const db = require('../models')
const Objectif = db.objectif
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.titre) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Objectif.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Objectif: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const id = req.params.id

  Objectif.findAll({
    where: { idprogramme: { [Op.eq]: `${id}` } },
  })
    .then((data) => {
      console.log('data : ', data)

      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving Objectifs.',
      })
    })
}

exports.findOne = (req, res) => {
  const id = req.params.id
  Objectif.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Objectif with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Objectif with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Objectif.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Objectif was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Objectif with id=${id}. Maybe Objectif was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Objectif with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Objectif.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Objectif was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Objectif with id=${id}. Maybe Objectif was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Objectif with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Objectif.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Objectifs were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Objectifs.',
      })
    })
}
