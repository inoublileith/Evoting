module.exports = (sequelize, Sequelize) => {
  const Votant = sequelize.define('votant', {
    nom: {
      type: Sequelize.STRING,
    },
    prenom: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    tel: {
      type: Sequelize.INTEGER,
    },
    adresse: {
      type: Sequelize.STRING,
    },
  })
  return Votant
}
