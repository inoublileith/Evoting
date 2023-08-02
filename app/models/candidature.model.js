module.exports = (sequelize, Sequelize) => {
  const Candidature = sequelize.define('candidature', {
    date_insertion: {
      type: Sequelize.DATE,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
    iduser: {
      type: Sequelize.INTEGER,
    },
    idsession: {
      type: Sequelize.INTEGER,
    },
  })
  
  return Candidature
}
