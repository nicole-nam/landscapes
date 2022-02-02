<template>
  <div class="container w-75 pl-5">
    <div class="row align-center">
      <div
        class="col-items col-auto p-0"
        v-for="(item, index) in album"
        :key="index"
      >
        <div class="card m-2 p-0" style="width: 18rem">
          <img
            :src="landscape(item.img)"
            class="card-img-top p-0 image"
            alt="landscape image"
          />
          <div class="card-img-overlay">
            <h5 class="card-title title">{{ item.title }}</h5>
          </div>
          <div class="card-body">
            <p class="card-text text">
              {{ item.description }}
            </p>

            <div class="d-flex justify-content-between">
              <fa v-if="item.featured" icon="heart" style="color: red" />
              <fa v-else icon="heart" style="opacity: 0" />
              <p class="date">{{ item.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserGallery",
  data() {
    return {
      album: [],
    };
  },
  methods: {
    landscape(pic) {
      console.log(pic);
      return require("../assets/" + pic);
    },
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/data`);
      this.album = res.data.album;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
.card {
  border: none;
}

.align-center {
  justify-content: center;
}

.image {
  position: relative;
  height: 170px;
  background-size: cover;
  background-position: center;
}

.title {
  color: white;
  position: absolute;
  top: 130px;
}

.text {
  font-size: 12px;
}

.date {
  font-size: 11px;
  color: grey;
}
</style>
