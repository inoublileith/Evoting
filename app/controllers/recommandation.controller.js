const db = require('../models')
const Recommandation = db.recommandation
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.titre) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Recommandation.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Recommandation: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const { titre } = req.query
  let condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null
  Recommandation.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while retrieving Recommandations.',
      })
    })
}
exports.findOne = (req, res) => {
  const id = req.params.id
  Recommandation.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Recommandation with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Recommandation with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Recommandation.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Recommandation was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Recommandation with id=${id}. Maybe Recommandation was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Recommandation with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Recommandation.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Recommandation was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Recommandation with id=${id}. Maybe Recommandation was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Recommandation with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Recommandation.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Recommandations were deleted successfully!`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while removing all Recommandations.',
      })
    })
}
