<template>
        <v-toolbar class="container_toolbar" style="color: whitesmoke;">
            <template #start>
                <span>Food Truck Lovers</span>
            </template>
            <template #end>
                <v-button label="Home" plain text @click="volverHome()"/>
            </template>
        </v-toolbar>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

function volverHome() {
    router.push('/home');
}
</script>

<style scoped>
.container_toolbar {
    background-color: rgba(0, 0, 0, 0.75);
}
</style>