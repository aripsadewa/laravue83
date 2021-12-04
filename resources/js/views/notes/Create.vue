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
              <div v-if="theErrors.title" class="mt-2 text-danger">
                {{ theErrors.title[0] }}
              </div>
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
              <div v-if="theErrors.subject" class="mt-2 text-danger">
                {{ theErrors.subject[0] }}
              </div>
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
              <div v-if="theErrors.description" class="mt-2 text-danger">
                {{ theErrors.description[0] }}
              </div>
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
      theErrors: [],
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
      try {
        let response = await axios.post("notes/create-new-note", this.form);
        if (response.status === 200) {
          this.form.title = "";
          this.form.description = "";
          this.form.subject = "";
          this.theErrors = [];
          this.$toasted.show(response.data.message, {
            type: "success",
            duration: 3000,
          });
        }
      } catch (e) {
        this.$toasted.show("Something went wrong.", {
          type: "error",
          duration: 3000,
        });
        this.theErrors = e.response.data.errors;
      }
    },
  },
};
</script>