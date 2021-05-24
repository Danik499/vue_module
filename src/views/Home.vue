<template>
  <div>
    <nav-bar />
    <h2>Get songs by group</h2>
    <input type="text" placeholder="group" v-model="group" />
    <button @click="getSongsByGroup">Submit</button>
    <ul>
      <li v-for="(song, i) in songsList" :key="i">{{song.name}}</li>
    </ul>
    <hr />
    <h2>Get CDs by song</h2>
    <input type="text" placeholder="song" v-model="song" />
    <button @click="getCDsBySong">Submit</button>
    <ul>
      <li v-for="(CD, i) in CDsList" :key="i">{{CD.name}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "@/components/NavBar";

export default {
  name: "Home",
  components: {
    NavBar
  },
  data() {
    return {
      group: "",
      songsList: () => [],
      song: "",
      CDsList: () => {}
    };
  },
  computed: mapGetters(["getGroups", "getSongs", "getCDs"]),
  methods: {
    getSongsByGroup() {
      const g = this.getGroups.filter(e => e.name === this.group)[0];
      this.songsList = this.getSongs.filter(e => g.songs.includes(e.id));
    },
    getCDsBySong() {
      const songId = this.getSongs.filter(e => e.name === this.song)[0].id;
      this.CDsList = this.getCDs.filter(e => e.songs.includes(songId));
    }
  }
};
</script>

<style lang="css" scoped>
</style>