const db = require('../models')
const Vote = db.vote
const Op = db.Sequelize.Op

// exports.create = async (req, res) => {
//   try {
//     if (!req.body.date) {
//       res.status(400).send({
//         message: 'Content can not be empty!',
//       })
//       return
//     }
//     Vote.create(req.body).then((data) => {
//       return res.send(data)
//     })
//   } catch (error) {
//     console.log(error)
//     return res.send(`Error when trying creating Vote: ${error}`)
//   }
// }

exports.create = async (req, res) => {
  const iduser = req.params.iduser;
  const idcandidature = req.params.idcandidature;
  Vote.findAndCountAll({
    where: {
      iduser: iduser,
    },
  })
    .then((data) => {
      if (data.count == 0) {
        Vote.create({
          iduser: iduser,
          idcandidature: idcandidature,
        }).then((data) => {
          res.send({
            message: "You voted succesfully!",
          });
        });
      } else {
        res.send({
          message: "You've already voted!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findAll = (req, res) => {
  const { date } = req.query
  let condition = date ? { date: { [Op.like]: `%${date}%` } } : null
  Vote.findAll({ where: condition })
    .then((data) => {
      console.log(data)
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving Votes.',
      })
    })
}
exports.findOne = (req, res) => {
  const id = req.params.id
  Vote.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data)
      } else {
        res.status(404).send({
          message: `Cannot find Vote with id=${id}.`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Vote with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id
  Vote.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Vote was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Vote with id=${id}. Maybe Vote was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Vote with id=' + id,
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id
  Vote.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Vote was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Vote with id=${id}. Maybe Vote was not found!`,
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Vote with id=' + id,
      })
    })
}

exports.deleteAll = (req, res) => {
  Vote.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Votes were deleted successfully!`,
      })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all Votes.',
      })
    })
}
