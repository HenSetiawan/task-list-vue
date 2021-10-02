<template>
  <div class="container">
    <div class="row mt-5">
      <div v-for="task in tasks" :key="task.id" class="col-lg-6 mt-4">
        <div class="card p-2">
          <h4>{{ task.title }}</h4>
          <p class="subject">{{ task.subject }}</p>
          <span class="text-secondary">{{ task.deadline }}</span>
          <p>
            {{ task.description }}
          </p>

          <a :href="task.url" class="badge rounded-pill bg-warning">link</a>
        </div>
      </div>
    </div>
    <Modal />
    <div class="fab" data-bs-toggle="modal" data-bs-target="#exampleModal">
      +
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "Task",
  data() {
    return { tasks: null };
  },
  components: { Modal },
  created() {
    fetch("https://task-list-tif.herokuapp.com/api/v1/tasks")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        this.tasks = result.data;
        console.log(this.tasks);
      });
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap");
h4 {
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  background: linear-gradient(
    180deg,
    transparent 0,
    transparent 50%,
    #fbf36d 0,
    #fbf36d
  );
  color: #454b4e;
  width: 60%;
}

p,
span {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
}

.subject {
  display: inline-block;
}

a {
  text-decoration: none;
  display: inline-block;
  color: black;
  width: 20%;
}

.fab {
  position: absolute;
  right: 30px;
  cursor: pointer;
  bottom: 30px;
  font-size: 35px;
  text-align: center;
  line-height: 70px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f0ad4e;
}
</style>
