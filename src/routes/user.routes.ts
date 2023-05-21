import { create, get } from "../controllers/user.controller";

const userRoutes = (app: any) => {
    app.post("/user", create);
    app.get("/user", get)
}

export default userRoutes;