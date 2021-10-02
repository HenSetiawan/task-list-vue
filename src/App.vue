<template>
  <div class="container">
    <img src="../public/img/learn.svg" alt="student image" class="img-fluid" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.img-fluid {
  width: 30%;
  height: 30%;
  margin: auto;
  display: block;
}
</style>
