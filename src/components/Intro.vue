<script lang="ts" setup>
import { title, description, pages } from '../structure.json';
</script>

<template>
  <div class="intro">
    <h1>{{ title }}</h1>
    <p class="subtitle">{{ description }}</p>
    <router-link :to="'/page/' + pages[0].link">Get started!</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "Intro"
}
</script>

<style scoped>

</style>