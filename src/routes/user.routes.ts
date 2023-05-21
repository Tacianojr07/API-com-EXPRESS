import { create, get, getId,updateId, deleted } from "../controllers/user.controller";

const userRoutes = (app: any) => {
    app.post("/user", create);
    app.get("/user", get);
    app.get("/user/:id", getId);
    app.put("/user/:id", updateId);
    app.delete("/user/:id", deleted)
}

export default userRoutes;