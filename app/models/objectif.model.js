module.exports = (sequelize, Sequelize) => {
  const Objectif = sequelize.define('objectif', {
    titre: {
      type: Sequelize.STRING,
    },
    domaine: {
      type: Sequelize.STRING,
    },
    sous_domaine: {
      type: Sequelize.STRING,
    },
    mission: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    date_debut_objectif: {
      type: Sequelize.DATE,
    },
    date_fin_objectif: {
      type: Sequelize.DATE,
    },
    propositions: {
      type: Sequelize.STRING,
    },
    reformes_a_venir: {
      type: Sequelize.STRING,
    },
    idprogramme: {
      type: Sequelize.INTEGER,
    },
  })

  return Objectif
}
