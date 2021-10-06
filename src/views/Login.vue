<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="mb-3 mt-2 text-secondary">Welcome Back (:</h1>
        <form action="">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="username" />
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="password"
            />
          </div>
          <div class="input-group mb-3">
            <button class="btn btn-warning btn-sm form-control">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

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
