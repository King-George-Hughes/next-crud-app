import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model.Post || mongoose.model("Post", postSchema);

export default Post;
