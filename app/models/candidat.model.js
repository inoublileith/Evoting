module.exports = (sequelize, Sequelize) => {
  const Candidat = sequelize.define('candidat', {
    grade: {
      type: Sequelize.STRING,
    },
    ordre: {
      type: Sequelize.STRING,
    },
    niveau_etude: {
      type: Sequelize.STRING,
    },
    postes_occupees: {
      type: Sequelize.STRING,
    },
    realisation: {
      type: Sequelize.STRING,
    },
    cv: {
      type: Sequelize.STRING,
    },
    
  })
  //
  //fs
  //
  return Candidat
}
