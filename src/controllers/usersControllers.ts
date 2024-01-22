import { Request,Response } from "express";
import { UsersServices } from "../services/usersServices";

export class UsersController {
    createUsers(req: Request, res: Response) {
        const userServices = new UsersServices();
        const user = req.body;

        if (!user.name || !user.email) {
            return res.status(400).send({ error: "Missing params" });
        }
        userServices.createUser(user.name, user.email);
        return res.status(201).send(user);
    }
    getUsers(req: Request, res: Response) {
        const userServices = new UsersServices();
        const users = userServices.getUsers();

        if (!users) {
            return res.status(400).send({ error: "Missing params" });
        }
        return res.status(200).send(users);
    }
    updateUser(req: Request, res: Response) {
        const userServices = new UsersServices();
        const user = req.body;
        const { id } = req.params;
        if (!user.name || !user.email) {
            return res.status(400).send({ error: "Missing params" });
        }
        const users = userServices.updateUser(Number(id), user.name, user.email);
        return res.status(200).send(users);
    }
    deleteUser(req: Request, res: Response) {
        const userServices = new UsersServices();
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({ error: "Missing params" });
        }
        const users = userServices.deleteUser(Number(id));
        return res.status(200).send(users);
    }
}