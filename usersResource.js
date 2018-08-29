import express from "express";
import Controller from "./usersController";

const stayterResource = express.Router();
const controller = new Controller();

stayterResource.post("/sign_in", (req, res, next) => {
    controller.validateLogin(req, res, next);
});

stayterResource.get("/user_data", (req, res, next) => {
    controller.getUserData(req, res, next);
});

export default stayterResource;
