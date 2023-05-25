import axios from "../utilities/axios";

const PostService = {
  async getAllPosts() {
    const posts = await axios.get("/posts");
    return posts;
  },

  async getPost(slug: string) {
    const posts = await axios.get(`/posts?slug=${slug}`);
    return posts;
  },

  async getFeaturedPosts() {
    const newPosts = await axios.get("/posts?featured=true");
    return newPosts;
  },
};

export default PostService;
