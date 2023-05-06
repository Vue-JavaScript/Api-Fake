<template>
    <div class="container_post">
      <section class="container_popularPost">
        <div class="card">
          <v-card>
            <template #header>
              <img alt="user header" :src="post.foto" style="width: 100%; height: auto; padding: 15px;" />
            </template>
            <template #title> {{ post.titulo }} </template>
            <template #content>
              <div> Summary <p>{{ post.resumen }}</p></div>
              <div> Content <p>{{ post.contenido }}</p></div>
            </template>
            <template #footer>
              <div class="container_like">
                <div class="footer-left">Likes: {{ post.likes }}</div>
                <div class="footer-right">
                  <v-button icon="pi pi-plus" aria-label="Submit" @click="amountLike(post.id)"/>
                </div>
              </div>
            </template>
          </v-card>
        </div>
      </section>
    </div>
</template>
  
<script setup>
import { ApiFake } from '@/services/api.service.js';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const API = new ApiFake();
const post = ref([]);
const id = parseInt(useRoute().params.postId);

API.getPosts().then((response) => {
  post.value = response.data.find(item => item.id === id);
})
.catch((error) => {
  console.log(error);
});

function amountLike(postId) {
    post.value.likes++;
    API.updatePost(postId, post.value).then((response) => {
      post.value = response.data;
    }).catch((error) => {
      console.log(error);
    });
}
</script>
  
<style scoped>
.container_like {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container_post {
  width: 35%;
  margin: auto;
  margin-top: 50px;
}
</style>