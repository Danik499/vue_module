<template>
  <div>
    <nav-bar />
    <h2>Delete CD</h2>
    <input type="text" placeholder="CD" v-model="cd" />
    <br />
    <button @click="deleteCD">Submit</button>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      cd: ""
    };
  },
  methods: {
    deleteCD() {
      this.$store.dispatch("deleteCD", this.cd);
    }
  }
};
</script>

<style lang="css" scoped>
</style>