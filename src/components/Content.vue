<template>
  <div class="content" v-html="toDisplay" />
  <hr />
  <br /><br />
  <div class="navigation">
    <a href="#">Previous Page</a>
    <a href="#">Next Page</a>
  </div>
</template>

<script lang="ts">
import {getContent} from "../converter";

export default {
  name: "Content",
  data: () => ({
    toDisplay: '<h1>Loading...</h1>'
  }),
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getContent(this.$route.params.id).then(content => {
        this.toDisplay = content;
      }).catch(err => {
        this.toDisplay = `<h1>Error</h1><div>${err.stack || err.message || err}</div>`;
      });
    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 2rem;
  max-width: 65%;
  text-align: left !important;
}
.navigation {
  width: 75%;
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;
}
</style>