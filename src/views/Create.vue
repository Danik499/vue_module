<template>
  <div>
    <nav-bar />
    <h2>Create song</h2>
    <input type="text" placeholder="song" v-model="song" />
    <br />
    <input type="text" placeholder="group" v-model="group" />
    <br />
    <p>{{error}}</p>
    <button @click="createSong">Submit</button>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import { mapGetters } from "vuex";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      song: "",
      group: "",
      error: ""
    };
  },
  computed: mapGetters(["getGroups"]),
  methods: {
    createSong() {
      if (!this.song || !this.group) {
        this.error = "All fields must be fulled";
        return;
      }
      this.$store.dispatch("createSong", {
        song: this.song,
        group: this.group
      });
      console.log(this.getGroups[0].songs);
    }
  }
};
</script>

<style lang="сss" scoped>
</style>