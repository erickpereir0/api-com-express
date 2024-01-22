import { Router } from "express";
import { UsersController } from "./controllers/usersControllers";

export const router = Router();

const usersController = new UsersController();

router.get("/users", usersController.getUsers);
// router.get("/users/:id", usersController.getUserById);
router.post("/users", usersController.createUsers);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

