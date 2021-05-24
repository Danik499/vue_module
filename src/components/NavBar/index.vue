<template>
  <div class="navbar">
    <div class="logo">My Music</div>
    <div class="router-links">
      <router-link to="/">home</router-link>
      <router-link to="/create">create</router-link>
      <router-link to="/deleteCD">deleteCD</router-link>
      <router-link to="/all_info">all info</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="css" scoped>
.navbar {
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
}

.router-links {
  width: 40%;
  display: flex;
  justify-content: space-between;
}
</style>