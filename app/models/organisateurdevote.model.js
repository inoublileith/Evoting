module.exports = (sequelize, Sequelize) => {
  const Organisateurdevote = sequelize.define('organisateurdevote', {
    fonction: {
      type: Sequelize.STRING,
    },
    grade: {
      type: Sequelize.STRING,
    },
    organisme: {
      type: Sequelize.STRING,
    },
  })

  return Organisateurdevote
}
