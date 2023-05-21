import { createUser } from "../repositorys/user.respository"
import { Request, Response } from "express";

export const create = async(req: Request, res: Response) => {
    try {
        const user = await createUser(req.body);
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}