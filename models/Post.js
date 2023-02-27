import mongoose from "mongoose";

const mongooseSchema = mongoose.createSchema({
    title:{
        type: String,
        required: true
    },
     body:{
        type: String,
        required: true
    },
});


const Post = new mongoose.model('Post', mongooseSchema)
export default Post;


