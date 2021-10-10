<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="mb-3 mt-2 text-secondary">Welcome Back (:</h1>
        <div class="input-group mb-3">
          <input
            v-model="username"
            type="text"
            class="form-control"
            placeholder="username"
          />
        </div>
        <div class="input-group mb-3">
          <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="password"
          />
        </div>
        <div class="input-group mb-3">
          <button @click="login" class="btn btn-warning btn-sm form-control">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
    const token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      this.$router.push("/");
    }
  },
  methods: {
    async login() {
      const response = await fetch(
        "https://task-list-tif.herokuapp.com/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password,
          }),
        }
      );
      const result = await response.json();
      if (result.token) {
        localStorage.setItem("token", result.token);
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
input,
button {
  border-radius: 16px;
  border: 2px solid #fbf36d !important;
}

h1 {
  font-size: 20px;
  text-align: center;
}
</style>
