import express from "express";
import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";

export class HousesController extends BaseController {
    constructor() {
        super("api/houses");
        this.router
            .get("", this.getAll)
            // .get('/:id', this.getOne)
            .post("", this.create)
            .delete('/:id', this.delete)
        // .put("/:id", this.edit)
    }

    async create(req, res, next) {
        try {
            let house = await housesService.create(req.body)
            res.status(201).send(house);
        } catch (error) {
            next(error)
        }

    }

    async getAll(req, res, next) {
        try {
            return res.send(await housesService.find(req.query))
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        try {
            res.send(await housesService.delete(req.params.id))
        } catch (error) {
            next(error)
        }
    }

    // async getOne()
}