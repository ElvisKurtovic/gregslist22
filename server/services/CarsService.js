
import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class CarsService {
    async delete(id) {
        return await dbContext.Cars.findByIdAndDelete(id)
    }
    async find(query = {}) {
        return await dbContext.Cars.find(query)
    }
    async create(newCar) {
        return await dbContext.Cars.create(newCar)
    }
}





export const carsService = new CarsService();