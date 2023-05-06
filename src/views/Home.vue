<template>
    <div class="container_posts">
      <section class="post" v-for="post in popularPosts" :key="post.id">
        <div class="card">POPULAR POSTS</div>
        <div class="card flex align-items-center justify-content-center">
          <v-card>
            <template #header>
              <img alt="user header" :src="post.foto" style="width: 350px; height: auto;"/>
            </template>
            <template #title> {{ post.titulo }} </template>
            <template #subtitle> Summary </template>
            <template #content>
              <p>{{ post.resumen }}</p>
            </template>
            <template #footer>
              <v-button label="See More" severity="success" @click="seeMore(post.id)" />
            </template>
          </v-card>
        </div>
      </section>
      <!-- <br><hr /> -->
      <section class="post" v-for="post in ourPosts" :key="post.id">
        <div class="card">OUR POSTS</div>
        <div class="card flex align-items-center justify-content-center">
          <v-card>
            <template #header>
              <img alt="user header" :src="post.foto" style="width: 350px; height: auto;"/>
            </template>
            <template #title> {{ post.titulo }} </template>
            <template #subtitle> Summary </template>
            <template #content>
              <p>{{ post.resumen }}</p>
            </template>
            <template #footer>
              <v-button label="See More" severity="success" @click="seeMore(post.id)" />
            </template>
          </v-card>
        </div>
      </section>
    </div>
</template>
  
<script setup>
import { ApiFake } from "@/services/api.service.js";
import { ref } from "vue";
import { useRouter } from 'vue-router';
  
const API = new ApiFake();
const popularPosts = ref([]);
const ourPosts = ref([]);
const router = useRouter();

API.getPosts().then((response) => {
  popularPosts.value = response.data.sort((a, b) => b.views - a.views).slice(0, 3);
  ourPosts.value = response.data.sort((a, b) => b.views - a.views).slice(3);
})
.catch((error) => {
  console.log(error);
});

function seeMore(id) {

  API.getPosts().then((response) => {
    const postToUpdate = response.data.find(item => item.id === id);
    postToUpdate.views++;
    API.updatePost(id, postToUpdate);
  }).catch((error) => {
    console.log(error);
  });
  router.push(`/posts/${id}`);
};
</script>

<style scoped>
.container_posts {
  display: flex;
  flex-wrap: wrap;
}

.post {
  display: inline-block;
  justify-content: center;
  width: calc(33.33% - 10px);
  margin: 5px;
  background-color: #f1f1f1;
  padding: 10px;
  box-sizing: border-box;
}

.card {
  width: 75%;
  margin: 0 auto;
}

/* .seccion { */
  /* display: flex; */
  /* justify-content: center; */
  /* Centra horizontalmente */
  /* align-items: center;  */
  /* Centra verticalmente */
/* } */
</style>