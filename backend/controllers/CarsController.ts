const data = require('../mockdata/data')

export class CarsController {

    static getCars(req, res, next) {
        try {
            return res.status(200).send(data)
        } catch (e) {
            next(e)
        }
    }

    static addToMaintenance(req, res, next) {
        try {
            const body = req.body
            // console.log(body)
            return res.status(201).send(body)
        } catch (e) {
            next(e)
        }
    }
}
