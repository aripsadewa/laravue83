r<template>
  <div class="container">
    <h3>Tables of Note</h3>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Subject</th>
          <th>Published</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="note in notes" :key="note.id">
          <td>
            <router-link
              :to="{ name: 'notes.show', params: { noteSlug: note.slug } }"
              >{{ note.title }}</router-link
            >
          </td>
          <td>{{ note.subject }}</td>
          <td>{{ note.published }}</td>
          <td>
            <router-link
              :to="{ name: 'notes.edit', params: { noteSlug: note.slug } }"
              >Edit</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  data() {
    return {
      notes: [],
    };
  },

  mounted() {
    this.getNotes();
  },

  methods: {
    async getNotes() {
      let response = await axios.get("notes");
      this.notes = response.data.data;
    },
  },
};
</script>
