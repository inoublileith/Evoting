const db = require('../models')
const Membre = db.membre
const Op = db.Sequelize.Op

exports.create = async (req, res) => {
  try {
    if (!req.body.profession) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Membre.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Membre: ${error}`)
  }
}

exports.findAll = (req, res) => {
  const { profession } = req.query
  let condition = profession
    ? { profession: { [Op.like]: `%${profession}%` } }
    : null
  Membre.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Membres.',
      })
    })
}

exports.getAllByIdP = (req, res) => {
  const id = req.params.id
  Membre.findAll({ where: {
    idprogramme: id
  } })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Membres.',
      })
    })
}
exports.findOne = (req, res) => {
  const id = req.params.id
  Membre.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Membre with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Membre with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Membre.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Membre was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Membre with id=${id}. Maybe Membre was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Membre with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Membre.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Membre was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Membre with id=${id}. Maybe Membre was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Membre with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Membre.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Membres were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Membres.',
      })
    })
}
