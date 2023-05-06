import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000/api/v1/posts'
});

export class ApiFake {

  getPosts() {
    return http.get('/posts');
  }

  updatePost(postId, updatedJSON) {
    return http.put(`/posts/${postId}`, updatedJSON);
  }
};