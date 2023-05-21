import { create } from "../controllers/user.controller";

const userRoutes = (app: any) => {
    app.post("/user", create)
}

export default userRoutes;