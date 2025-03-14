import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
   
});

const videoModel = mongoose.model("Video",videoSchema);

export default videoModel;