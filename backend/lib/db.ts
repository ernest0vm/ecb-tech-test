'use strict'

import defaults from 'defaults'
import { Sequelize } from 'sequelize'
let sequelize = null

function setupDatabase(config) {
    config = defaults(config, {
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        }
    })
    if (!sequelize) {
        sequelize = new Sequelize(config)
    }
    return sequelize
}

export default setupDatabase