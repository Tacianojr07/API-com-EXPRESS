import{userValidation} from "../validations/user.validation"
import bcrypt from "bcrypt";
import { createUser, getAll,getById, updateUser,deleteUser } from "../repositorys/user.respository"
import { Request, Response } from "express";

export const create = async(req: Request, res: Response) => {
    try {
        await userValidation.validate(req.body);

        const hashPassword = await bcrypt.hash(req.body.passwrod,10);
        req.body.passwrod = hashPassword;
        const user = await createUser(req.body);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    }
};

export const get = async(req: Request, res: Response) => {
    try {
        const users = await getAll();
        res.status(200), res.send(users);
    } catch (e) {
        res.status(400), res.send(e);
        console.log(e);
    };
};

export const getId = async(req:Request, res: Response) => {
    try {
        const user = await getById(Number(req.params.id));
        res.status(200), res.send(user);
    } catch (e) {
        res.status(400), res.send(e);
        console.log(e)
    }
};

export const updateId = async(req:Request, res:Response) => {
    try {
        const user = await updateUser(Number(req.params.id), req.body)
        res.status(200), res.send(user);
    } catch (e) {
        res.status(400), res.send(e);
        console.log(e);
    }

};

export const deleted = async(req: Request, res:Response) => {
    try {
        await deleteUser(Number(req.params.id))
        res.status(200), res.send("Delectd sucefully");
    } catch (e) {
        res.status(400), res.send(e);
    }
}