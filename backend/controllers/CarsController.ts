import dbAccess from '../models/dbAccess'
const configDb = require('../dbConfig')

export class CarsController {

    static async getCars(req, res, next) {
        try {
            const db = await dbAccess(configDb)
            const carsList = await db.Car.getAll()
            carsList.sort((a, b) => a.id - b.id)
            return res.status(200).send(carsList)
        } catch (e) {
            next(e)
        }
    }

    static async addCars(req, res, next) {
        try {
            const body = req.body
            const db = await dbAccess(configDb)

            const car = await db.Car.create({
                description: body.description,
                make: body.make,
                model: body.model,
                estimatedate: body.estimatedate,
                km: body.km,
                image: body.image
            })

            return res.status(201).send(car)
        } catch (e) {
            next(e)
        }
    }

    static async getCarsById(req, res, next) {
        try {
            const id = req.params.id
            const db = await dbAccess(configDb)

            const car = await db.Car.findById(id)
            if (car) {
                return res.status(200).send(car)
            }
            return res.status(404).send()
        } catch (e) {
            next(e)
        }
    }

    static async updateCar(req, res, next) {
        try {
            const carId = req.body.id
            const body = req.body
            const db = await dbAccess(configDb)
            const car = await db.Car.findByPk(carId)
            if (car) {
                car.description = body.description
                car.make = body.make
                car.model = body.model
                car.km = body.km
                car.image = body.image
                car.estimatedate = body.estimatedate
                await car.save()
                const updatedCar = await db.Car.findByPk(carId)
                return res.status(200).send(updatedCar)
            }
            return res.status(404).send()
        } catch (e) {
            next(e)
        }
    }
}
