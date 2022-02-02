<template>
  <div id="app">
    <user-card>></user-card>
    <user-gallery class="align"></user-gallery>
  </div>
</template>

<script>
import axios from "axios";
import UserCard from "./components/UserCard.vue";
import UserGallery from "./components/UserGallery.vue";

export default {
  name: "App",
  components: {
    "user-card": UserCard,
    "user-gallery": UserGallery,
  },
  data() {
    return {
      album: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/data`);
      this.user = res.data;
      this.album = res.data.album;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;1,700&display=swap");

body {
  padding: 0;
  margin: 0;
  background: linear-gradient(
    -45deg,
    #c7765e8f,
    #e768994b,
    #449ab965,
    #23d5ab85
  );
  height: 100vh;
  font-family: "Roboto", sans-serif;
}

.align {
  margin-top: -20px;
  padding: 0;
}
</style>
