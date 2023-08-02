module.exports = (sequelize, Sequelize) => {
  const Loi = sequelize.define('loi', {
    type: {
      type: Sequelize.STRING,
    },
    regles: {
      type: Sequelize.STRING,
    },
    condition_electeur: {
      type: Sequelize.STRING,
    },
    condition_candidat: {
      type: Sequelize.STRING,
    },
  })
  return Loi
}
