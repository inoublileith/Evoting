module.exports = (sequelize, Sequelize) => {
  const Sessiondevote = sequelize.define('sessiondevote', {
    libelle: {
      type: Sequelize.STRING,
    },
    date_debut_election: {
      type: Sequelize.DATE,
    },
    date_fin_election: {
      type: Sequelize.DATE,
    },
    procedure_electoral: {
      type: Sequelize.STRING,
    },
    date_debut_publicite: {
      type: Sequelize.DATE,
    },
    date_fin_publicite: {
      type: Sequelize.DATE,
    },
    date_debut_session: {
      type: Sequelize.DATE,
    },
    date_fin_session: {
      type: Sequelize.DATE,
    },
    reference: {
      type: Sequelize.INTEGER,
    },
  })
  return Sessiondevote
}
