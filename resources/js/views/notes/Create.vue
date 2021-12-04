<template>
  <div class="container">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">New Note</div>
        <div class="card-body">
          <form action="#" method="post" @submit.prevent="store">
            <div class="form-group">
              <label for="title">Title</label>
              <input
                type="text"
                v-model="form.title"
                id="title"
                class="form-control"
              />
            </div>
            <div class="form-group">
              <label for="subject">Subject</label>
              <select
                type="text"
                v-model="form.subject"
                id="Subject"
                class="form-control"
              >
                <option
                  v-for="subject in subjects"
                  :key="subject.id"
                  :value="subject.id"
                >
                  {{ subject.title }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea
                type="text"
                v-model="form.description"
                id="description"
                rows="5"
                class="form-control"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        subject: "",
      },
      subjects: [],
    };
  },

  mounted() {
    this.getSubjects();
  },

  methods: {
    async getSubjects() {
      let response = await axios.get("subject");
      if (response.status === 200) {
        this.subjects = response.data;
      }
    },

    async store() {
      let response = await axios.post("notes/create-new-note", this.form);
      if (response.status === 200) {
        this.form.title = "";
        this.form.description = "";
        this.form.subject = "";
      }
    },
  },
};
</script>