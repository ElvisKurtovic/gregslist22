
import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class HousesService {
    async delete(id) {
        return await dbContext.Houses.findByIdAndDelete(id)
    }
    async find(query = {}) {
        return await dbContext.Houses.find(query)
    }
    async create(newHouse) {
        return await dbContext.Houses.create(newHouse)
    }
}





export const housesService = new HousesService();