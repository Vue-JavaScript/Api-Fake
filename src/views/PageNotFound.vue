<template>
    <span>PAGE NOT FOUND</span><br>
    <span>Pagina no existente... <br><v-button @click="returnHome()">Return Home</v-button></span>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function returnHome() {
    router.push('/home');
}
</script>

<style scoped>

</style>