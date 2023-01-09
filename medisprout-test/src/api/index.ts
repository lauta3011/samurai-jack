import axios from "axios";
import TComment from '../types/comment';

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
      "Content-type": "application/json",
    },
})

const getComments = async (): Promise<TComment[]> => {
    const res = await apiClient.get("posts/1/comments");
    return res.data;
}

const CommentAPI = {
    getComments
}

export default CommentAPI;