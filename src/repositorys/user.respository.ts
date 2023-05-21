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