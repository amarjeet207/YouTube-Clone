import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    
});

const commentModel = mongoose.model("Comment",commentSchema);

export default commentModel;