const { DataTypes } = require("sequelize");

const db = require("../db/conn");

const cliente = db.define("cliente", {
  nome: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING(100),
    required: true,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING(11),
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING(11),
    unique: true,
  },
});

module.exports = cliente;
