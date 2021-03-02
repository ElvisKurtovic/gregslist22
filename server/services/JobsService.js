
import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";


class JobsService {
    async delete(id) {
        return await dbContext.Jobs.findByIdAndDelete(id)
    }
    async find(query = {}) {
        return await dbContext.Jobs.find(query)
    }
    async create(newJob) {
        return await dbContext.Jobs.create(newJob)
    }
}





export const jobsService = new JobsService();