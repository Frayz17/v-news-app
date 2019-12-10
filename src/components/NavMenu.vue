<template>
  <nav class="nav-menu">
    <ul class="nav-menu__container">
      <router-link to="/">Home</router-link>
      <router-link to="/sport">Sport</router-link>
      <router-link to="/art">Art</router-link>
      <router-link to="/political">Political</router-link>
      <router-link to="/about">About</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  components: {}
};
</script>

<style scoped>
.nav-menu {
  background-color: aliceblue;
}

.nav-menu__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #242424;
  line-height: 20px;
}

.nav-menu__container a.router-link-exact-active {
  color: #42b983;
}
</style>
