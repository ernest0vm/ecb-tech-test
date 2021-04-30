'use strict'

import defaults from 'defaults'
import setupCarModel from './car_model'

async function dbAccess (config) {
    config = defaults(config, {
        pool: {
            max: 10,
            min: 0,
            idle: 10000
        }
    })
    
    const Car = setupCarModel(config)

    return { Car }
}

export default dbAccess
