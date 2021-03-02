import express from "express";
import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";

export class JobsController extends BaseController {
    constructor() {
        super("api/jobs");
        this.router
            .get("", this.getAll)
            // .get('/:id', this.getOne)
            .post("", this.create)
            .delete('/:id', this.delete)
        // .put("/:id", this.edit)
    }

    async create(req, res, next) {
        try {
            let job = await jobsService.create(req.body)
            res.status(201).send(job);
        } catch (error) {
            next(error)
        }

    }

    async getAll(req, res, next) {
        try {
            return res.send(await jobsService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await jobsService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    // async getOne()
}