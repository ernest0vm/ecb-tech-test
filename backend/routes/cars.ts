import express from 'express'
import { CarsController } from '../controllers/CarsController'

const api = express.Router()

api.get('/cars', CarsController.getCars)
api.get('/cars/:id', CarsController.getCarsById)

api.post('/cars', CarsController.addCars)

api.patch('/cars', CarsController.updateCar)


export default api