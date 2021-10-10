<template>
  <div class="container">
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="input">
              <p class="form-label">Judul Tugas</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="task"
                  aria-describedby="basic-addon1"
                  id="title"
                  v-model="title"
                  required
                />
              </div>
            </div>
            <div class="input">
              <p class="form-label">Mata Kuliah</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="subject"
                  aria-describedby="basic-addon1"
                  id="subject"
                  v-model="subject"
                  required
                />
              </div>
            </div>
            <div class="input">
              <div class="mb-3">
                <label for="description" class="form-label">Deskripsi</label>
                <textarea
                  class="form-control"
                  id="description"
                  rows="3"
                  v-model="description"
                  required
                ></textarea>
              </div>
            </div>
            <div class="input">
              <p class="form-label">Batas Akhir</p>
              <div class="input-group mb-3">
                <input
                  type="datetime-local"
                  class="form-control"
                  aria-label="deadline"
                  aria-describedby="basic-addon1"
                  id="deadline-date"
                  v-model="deadlineDate"
                  required
                />
              </div>
            </div>
            <div class="input">
              <p class="form-label">Link Tugas</p>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-label="link"
                  aria-describedby="basic-addon1"
                  id="url"
                  v-model="url"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              @click="sendNewTask()"
              type="button"
              class="btn btn-warning btn-sm text-light"
            >
              Save Task
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      title: "",
      subject: "",
      description: "",
      deadlineDate: "",
      url: "",
      baseUrl: process.env.VUE_APP_BASE_URL,
    };
  },
  methods: {
    async sendNewTask() {
      const token = localStorage.getItem("token");
      const data = {
        title: this.title,
        description: this.description,
        subject: this.subject,
        deadline: this.deadlineDate,
        url: this.url,
      };
      try {
        const response = await fetch(`${this.baseUrl}/task/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();
        console.log(result);
        this.$emit("sendNewData");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap");
.form-label {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
  font-size: 18px;
}
</style>
