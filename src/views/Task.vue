<template>
  <div class="container">
    <div class="row mt-5 mb-5" v-if="!isLoading">
      <div v-for="task in tasks" :key="task._id" class="col-lg-6 mt-4">
        <div class="card p-2">
          <h4>{{ task.title }}</h4>
          <p class="subject">{{ task.subject }}</p>
          <span class="text-secondary">{{ task.deadline }}</span>
          <p>
            {{ task.description }}
          </p>
          <div class="action">
            <a :href="task.url" class="badge rounded-pill bg-warning">link</a>
            <button
              v-if="isAdmin"
              @click="deleteTask(task._id)"
              class="ml-2 badge rounded-pill bg-danger btn-action"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <img
          v-if="isLoading"
          src="../assets/loader.svg"
          alt="loading"
          class="img-fluid mx-auto mt-5"
        />
      </div>
    </div>
    <Modal v-if="isAdmin" @sendNewData="getTask()" />
    <div
      v-if="isAdmin"
      class="fab"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      +
    </div>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
import swal from "sweetalert";

export default {
  name: "Task",
  data() {
    return {
      tasks: null,
      isLoading: true,
      isAdmin: false,
      baseUrl: process.env.VUE_APP_BASE_URL,
    };
  },
  components: { Modal },
  created() {
    this.getTask();
    const token = localStorage.getItem("token");
    if (token !== undefined && token !== null) {
      this.isAdmin = true;
    }
  },
  methods: {
    async deleteTask(taskId) {
      const willDelete = await swal({
        title: "Yakin Nih?",
        text: "Data yang dihapus tidak bisa lagi dikembalikan!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });

      if (willDelete) {
        const token = localStorage.getItem("token");
        const url = `${this.baseUrl}/task/${taskId}`;
        await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        this.getTask();
        swal("Yeay data berhasil dihapus!", {
          icon: "success",
        });
      }
    },
    getTask() {
      fetch(`${this.baseUrl}/tasks`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          this.isLoading = false;
          this.tasks = result.data;
        });
    },
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

.btn-action {
  display: inline-block;
  width: 20%;
  border: none;
}

.action {
  display: flex;
  justify-content: space-between;
}

.fab {
  position: fixed;
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
