<template>
  <div class="card">
    <div class="d-flex">
      <img
        class="profile"
        :src="profileImg(user.profile_picture)"
        alt="user image"
      />

      <div class="container">
        <div class="row">
          <div class="col-sm user-name mt-2">
            <h2>{{ user.name }}</h2>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-8">
            <span class="user-label">Bio</span><br />
            <p class="bio">{{ user.bio }}</p>
          </div>
          <div class="col-4 align-self-end">
            <div class="row">
              <span class="user-label">Phone</span><br />
              <p class="contact">{{ user.phone }}</p>
            </div>
            <div class="row">
              <span class="user-label">Email</span><br />
              <p class="contact">{{ user.email }}</p>
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
  name: "UserCard",
  data() {
    return {
      user: [],
    };
  },
  methods: {
    profileImg(pic) {
      return require("../assets/" + pic);
    },
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/data`);
      this.user = res.data;
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
h2,
p,
span {
  margin: 0;
  padding: 0;
}

.card {
  background-color: white;
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  width: 65%;
  margin: 50px auto;
}

.profile {
  height: 150px;
  border-radius: 50%;
}

.user-detail {
  color: grey;
  font-weight: bold;
}

.bio {
  font-weight: 300;
  color: rgb(173, 173, 173);
  font-size: 11px;
  line-height: 1.2;
}

.user-label {
  font-weight: 700;
  font-size: 12px;
  color: rgb(173, 173, 173);
}

.contact {
  color: red;
  font-size: 12px;
  margin-top: -10px;
}
</style>
