
export class CarsController  {
     static getCars = (req, res, next) => {
        try {
            let data = [
                {
                    "description": " change of suspension",
                    "make": "Nissan",
                    "model": "Versa",
                    "estimatedate": "2021/12/01",
                    "id": 3340,
                    "image": "http://3.23.108.188/cars/versa.jpg"
                },
                {
                    "description": " motor adjustment",
                    "make": " Honda ",
                    "model": "CR-V",
                    "estimatedate": "",
                    "id": 3341,
                    "image": "http://3.23.108.188/cars/CR-V.jpg",
                },
                {
                    "description": " engine tuning ",
                    "make": "Honda", 
                    "model": "Civic", 
                    "estimatedate": "2020/20/12", 
                    "id": 3342,
                    "km": 90000,
                    "image": "http://3.23.108.188/cars/civic.jpg"
                },
                {
                    "description": " oil change ",
                    "make": " Volkswaguen",
                    "model": "Tiguan",
                    "id": 3343, 
                    "km": 13500,
                    "image": "http://3.23.108.188/cars/tiguan.jpg"
                }, 
                {
                    "id": 3344,
                    "image": "http://3.23.108.188/cars/sentra.jpg"
                },
                {
                    "id": 3345,
                    "image": "http://3.23.108.188/cars/vento.jpg"
                },
                {
                    "description": "Change Transmission (CVT)", 
                    "make": "Chevrolet",
                    "model": "Aveo NG", 
                    "estimatedate": "2021/09/07",
                    "id": 3346,
                    "km": 33460, 
                    "image": "http://3.23.108.188/cars/aveo.jpg"
                }, 
                {
                    "id": 3347,
                    "image": "http://3.23.108.188/cars/spark.jpg"
                }
            ]

            return res.status(200).send(data)
        } catch (e) {
            next(e)
        }
    }
}
