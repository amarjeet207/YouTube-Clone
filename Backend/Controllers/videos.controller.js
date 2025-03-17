import userModel from "../Models/users.model.js";
import videoModel from "../Models/videos.model.js";

export async function fetchAllVideos(req,res){
    try {
        const videos = await videoModel.find();
        res.status(200).send(videos);
    } catch (error) {
        console.error("Error fetching videos:", error);
        res.status(500).send({ error: "Error fetching videos" });
    }

}

export async function fetchAVideo(req,res){
    try {
        const videoId = req.params.id
        const video = await videoModel.find({_id : videoId});
        res.status(200).send(video);
    } catch (error) {
        console.error("Error fetching videos:", error);
        res.status(500).send({ error: "Error fetching videos" });
    }

}


export async function addComment(req, res) {
    try {
        const { commentText, userId, videoId } = req.body;

        // Fetch video and user
        const video = await videoModel.findById(videoId);

        const user = await userModel.findById(userId);

        // Extract user name
        const userName = user.fullName.split(" ")[0];

        // Add comment
        video.comments.push({
            commentText: commentText,
            commentBy: "@" + userName
        });

        // Save updated video
        await video.save();

        res.status(200).json({ message: "Comment added successfully" });
    } catch (error) {
        console.error("Error adding comment:", error);
        res.status(500).json({ error: "Error adding comment" });
    }
}
