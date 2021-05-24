<template>
  <div>
    <nav-bar />
    <h2>Show all info</h2>
    <h3>Groups</h3>
    <div>{{info.groups}}</div>
    <h3>Songs</h3>
    <div>{{info.songs}}</div>
    <h3>CD</h3>
    <div>{{info.CD}}</div>
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
      info: () => {}
    };
  },
  computed: mapGetters(["getAllInfo"]),
  mounted() {
    this.info = this.getAllInfo;
  }
};
</script>

<style lang="scss" scoped>
</style>