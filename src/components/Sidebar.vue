<template>
  <div class="sidebar">
    <h3 class="sidebar-title">Contents</h3>
    <a href="/" v-text="'Home'" class="sidebar-item" />
    <a v-for="item in items" :key="item.to" :href="item.to" v-text="item.name" class="sidebar-item" />
  </div>
</template>

<script lang="ts">
export default {
  name: "Sidebar",
  props: ['items']
}
</script>
<style scoped>
.sidebar {
  padding-left: 2rem;
  padding-right: 4rem;
  height: 100vh;
  border-right: 2px solid #000000;
  text-align: left;
}
.sidebar-item:first-of-type {
  margin-top: 2.5rem;
}
.sidebar-item {
  display: block;
  margin: 1rem 0;
  text-decoration: none;
  text-align: left;
}
</style>