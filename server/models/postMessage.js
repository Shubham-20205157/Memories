import mongoose  from "mongoose";

const postSchema = mongoose.Schema(
    {
        title: String,
        message: String,
        creator: String,
        tags: [String],
        selectedFile: String,
        likeCount:{
            type: Number,
            default:0
        },
        createdAt:{
            type: Date,
            default: Date.now()
        }
    }
)

// convert this postSchema into a model named postMessage.
const postMessage = mongoose.model('postMessage',postSchema);

export default postMessage;
