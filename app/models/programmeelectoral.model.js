module.exports = (sequelize, Sequelize) => {
  const Programmeelectoral = sequelize.define('programmeelectoral', {
    titre: {
      type: Sequelize.STRING,
    },
    symbole_electoral: {
      type: Sequelize.STRING,
    },
    sous_domaine: {
      type: Sequelize.STRING,
    },
    date_debut_programme: {
      type: Sequelize.DATE,
    },
    date_fin_programme: {
      type: Sequelize.DATE,
    },
    objectif_global: {
      type: Sequelize.STRING,
    },
    introduction: {
      type: Sequelize.STRING,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
    date_insertion: {
      type: Sequelize.DATE,
    },
  })
  return Programmeelectoral
}
