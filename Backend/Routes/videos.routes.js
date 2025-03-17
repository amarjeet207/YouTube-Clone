import { addComment, fetchAllVideos, fetchAVideo } from "../Controllers/videos.controller.js";
import { verifyToken } from "../Middlewares/verifyToken.js";

export function videoRoutes(app){
app.get("/api/videos",fetchAllVideos);
app.get("/api/video/:id",fetchAVideo)
app.post("/api/video/comment",verifyToken,addComment);
}