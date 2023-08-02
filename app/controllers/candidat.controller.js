const db = require('../models')
const Candidat = db.candidat
const User = db.user
const Op = db.Sequelize.Op
const sql = db.sequelize


exports.create = async (req, res) => {
  try {
    if (!req.body.grade) {
      res.status(400).send({
        message: 'Content can not be empty!',
      })
      return
    }
    Candidat.create(req.body).then((data) => {
      return res.send(data)
    })
  } catch (error) {
    console.log(error)
    return res.send(`Error when trying creating Candidat: ${error}`)
  }
}

// exports.findAll = (req, res) => {
//   const { grade } = req.query
//   let condition = grade ? { grade: { [Op.like]: `%${grade}%` } } : null
//   Candidat.findAll({ where: condition })
//     .then((data) => {
//       console.log(data)
//       res.send(data)
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while retrieving Candidats.',
//       })
//     })
// }

exports.findAll = async (req, res) => {
  // const id = req.params.id
  const data = await sql
    .query(
      `SELECT users.etat, users.nom, users.prenom, users.cin, users.email, candidats.id, candidats.grade, candidats.ordre, candidats.niveau_etude, candidats.postes_occupees, candidats.realisation FROM users, candidats WHERE users.id = candidats.id`
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
  Candidat.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Candidat with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Candidat with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Candidat.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Candidat was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Candidat with id=${id}`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Candidat with id=' + id,
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
          message: 'Candidat was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Candidat with id=${id}`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Candidat with id=' + id,
      })
    })
}

exports.autoriserUser = (req, res) => {
  const id = req.params.id
  User.update({ etat: '1' }, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Candidat was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Candidat with id=${id}. Maybe Candidat was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Candidat with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Candidat.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Candidat was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Candidat with id=${id}. Maybe Candidat was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Candidat with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Candidat.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Candidats were deleted successfully!` })
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all Candidats.',
      })
    })
}
