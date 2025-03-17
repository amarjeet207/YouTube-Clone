import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnailURL: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    },
    userID: {
        type: String,
        required: true
    },
    channelName: {
        type: String,
        required: true
    },
    likes: {
        type: String,
        required: true
    },
    views: {
        type: String,
        required: true
    },
    comments: [
        {
            commentText:{ 
                type: String,
                required: true
            },
            commentBy:{
                type: String,
                required: true
            }
        }
    ],
    description: {
        type: String,
        required: true
    }
});

const videoModel = mongoose.model("Video",videoSchema);

export default videoModel;