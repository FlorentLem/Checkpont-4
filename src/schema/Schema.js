const Sequelize = require("sequelize");
const sequelize = require("../database/db");

const Admin = sequelize.define("admin", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: Sequelize.STRING(35),
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING(35),
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING(255),
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING(35),
    allowNull: false,
    unique: true,
  },
});

const Projet = sequelize.define("projets", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING(160),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(1000),
    allowNull: true,
  },
});

const Picture = sequelize.define("pictures", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(255),
    allowNull: false,
    unique: true,
  },
});

const Langage = sequelize.define("langages", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING(35),
    allowNull: false,
  },
});

const ProjetLangages = sequelize.define("ProjetLangages", {
  projetId: {
    type: Sequelize.INTEGER(11),
    references: {
      model: Projet,
      key: "id",
    },
  },
  langageId: {
    type: Sequelize.INTEGER(11),
    references: {
      model: Langage,
      key: "id",
    },
  },
});

Picture.hasMany(Projet);
Projet.belongsTo(Picture);

Projet.belongsToMany(Langage, { through: ProjetLangages });
Langage.belongsToMany(Projet, { through: ProjetLangages });

module.exports = {
  Projet,
  Langage,
  Admin,
  Picture,
  ProjetLangages,
};
