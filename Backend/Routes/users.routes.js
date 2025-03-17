import { signup, signin, fetchChannelDetails } from "../Controllers/users.controller.js";

export function userRoutes(app){
    app.post("/api/signup",signup);
    app.post("/api/signin",signin);
    app.post("/api/channel",fetchChannelDetails);
}