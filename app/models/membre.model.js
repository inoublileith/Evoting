module.exports = (sequelize, Sequelize) => {
  const Membre = sequelize.define('membre', {
    profession: {
      type: Sequelize.STRING,
    },
    cv: {
      type: Sequelize.STRING,
    },
    poste_occupee: {
      type: Sequelize.STRING,
    },
    nom: {
      type: Sequelize.STRING,
    },
    prenom: {
      type: Sequelize.STRING,
    },
    cin: {
      type: Sequelize.INTEGER,
    },
    idprogramme: {
      type: Sequelize.INTEGER,
    },
  })
  return Membre
}
