module.exports = (sequelize, Sequelize) => {
  const Vote = sequelize.define('vote', {
    date: {
      type: Sequelize.DATE,
    },
    iduser: {
      type: Sequelize.INTEGER,
    },
    idcandidature: {
      type: Sequelize.INTEGER,
    },
  })
  
  return Vote
}
