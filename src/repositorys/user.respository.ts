import { prisma } from "../services/prisma"

export const createUser = async (data: any) => {
    const user = await prisma.user.create({
        data,
        select: {
            id: true,
            email: true,
            name: true,
            passwrod: false,
            phone: true,
            createdAt: true,
            updatedAt: true
        }
    });
    return user
};

export const getAll = async() => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            email: true,
            name: true,
            passwrod: false,
            phone: true,
            createdAt: true,
            updatedAt: true
        }
    })
    return users
};