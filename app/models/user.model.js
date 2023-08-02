module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    nom: {
      type: Sequelize.STRING,
    },
    prenom: {
      type: Sequelize.STRING,
    },
    civil: {
      type: Sequelize.STRING,
    },
    date_naissance: {
      type: Sequelize.DATE,
    },
    cin: {
      type: Sequelize.INTEGER,
    },

    tel: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    gouvernorat: {
      type: Sequelize.STRING,
    },
    delegation: {
      type: Sequelize.STRING,
    },
    adresse: {
      type: Sequelize.STRING,
    },
    code_postal: {
      type: Sequelize.INTEGER,
    },
    login: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    etat: {
      type: Sequelize.INTEGER,
    },
    profil: {
      type: Sequelize.STRING,
    },
    permission: {
      type: Sequelize.STRING,
    },
    avatar: {
      type: Sequelize.STRING,
    },
    couverture: {
      type: Sequelize.STRING,
    },
    date_ins: {
      type: Sequelize.DATE,
    },
    date_upload: {
      type: Sequelize.DATE,
    },
    token_id: {
      type: Sequelize.INTEGER,
    },
    token_strd: {
      type: Sequelize.INTEGER,
    },
    wallet_adress: {
      type: Sequelize.STRING,
    },
  })
  return User
}
