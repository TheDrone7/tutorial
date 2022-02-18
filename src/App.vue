<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import { pages } from './structure.json';

const sidebarItems = pages.map(p => ({name: p.title, to: '/' + p.link} ));
</script>

<template>
  <div class="page">
    <Sidebar :items="sidebarItems" />
    <div class="main">
      <div class="top-section"><button>MENU</button></div>
      <router-view />
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  box-sizing: border-box;
}
img {
  max-width: 100% !important;
}
.page {
  display: flex;
  flex-direction: row;
  width: 100vw;
}
.main {
  flex-grow: 1;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.top-section {
  margin-top: 2rem;
  padding-left: 4rem;
  width: 100%;
  display: flex;
}
.main > hr {
  width: 75%;
}
</style>
