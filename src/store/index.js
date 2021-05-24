import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    groups: [
      {
        name: "Queen",
        singers: ["singer1", "singer2"],
        songs: [1, 3]
      },
      {
        name: "imagine dragons",
        singers: ["singer1", "singer2", "singer3"],
        songs: [2, 4]
      }
    ],
    songs: [
      {
        id: 1,
        name: "song1"
      },
      {
        id: 2,
        name: "song2"
      },
      {
        id: 3,
        name: "song3"
      },
      {
        id: 4,
        name: "song4"
      }
    ],
    CD: [
      {
        id: 30,
        name: "CD1",
        //    list of id
        songs: [2, 3, 1]
      },
      {
        id: 31,
        name: "CD2",
        songs: [1, 2]
      }
    ]
  },
  getters: {
    getGroups: state => state.groups,
    getSongs: state => state.songs,
    getCDs: state => state.CD,
    getAllInfo: state => state
  },
  mutations: {
    setSong(state, { newSong, g }) {
      state.songs.push(newSong)
      g.songs.push(newSong.id)
    },
    deleteCD(state, cd) {
      state.CD = state.CD.filter(e => e.name != cd)
    }
  },
  actions: {
    createSong({ commit }, { song, group }) {
      const newSong = {
        id: Date.now(),
        name: song
      }
      const g = this.getters.getGroups.filter(e => e.name === group)[0]
      if (!g) {
        return console.log("this group does not exist")
      }
      commit("setSong", { newSong, g })
    },
    deleteCD({ commit }, cd) {
      commit("deleteCD", cd)
    }
  },
  modules: {
  }
})
