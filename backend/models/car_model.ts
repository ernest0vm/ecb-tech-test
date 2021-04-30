'use strict'
import { DataTypes } from 'Sequelize'
import setupDatabase from '../lib/db'

function setupCarModel(config) {
  const sequelize = setupDatabase(config)
  const Car = sequelize.define('Cars', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.STRING
    },
    make: {
      allowNull: true,
      type: DataTypes.STRING
    },
    model: {
      allowNull: true,
      type: DataTypes.STRING
    },
    estimatedate: {
      allowNull: true,
      type: DataTypes.STRING
    },
    km: {
      allowNull: true,
      type: DataTypes.INTEGER
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING
    }
  },
    {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
    })

  Car.findById = function (id) {
    return Car.findByPk(id)
  }

  Car.getAll = function () {
    return Car.findAll()
  }

  return Car
}

export default setupCarModel