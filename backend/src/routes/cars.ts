import express from 'express'
import { CarsController } from '../controllers/CarsController'

const api = express.Router()
const morgan = require('morgan')

// API routes declaration
api.get('/cars', [morgan('tiny')] , CarsController.getCars)

module.exports = api