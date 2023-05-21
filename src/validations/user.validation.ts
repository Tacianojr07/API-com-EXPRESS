import * as yup from "yup";

export const userValidation = yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
    phone: yup.number().min(0).max(999).nullable()
})