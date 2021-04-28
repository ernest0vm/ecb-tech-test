import express from 'express'
import { CarsController } from '../controllers/CarsController'

const api = express.Router()

api.get('/cars', CarsController.getCars)
api.post('/cars', CarsController.addToMaintenance)

export default api