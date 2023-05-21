import bcrypt from "bcrypt";
import { createUser } from "../repositorys/user.respository"
import { Request, Response } from "express";

export const create = async(req: Request, res: Response) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.passwrod,10);
        req.body.passwrod = hashPassword;
        const user = await createUser(req.body);
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}