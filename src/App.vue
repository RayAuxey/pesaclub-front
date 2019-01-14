<template>
  <div id="app">
    <Navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Welcome,
    Navbar
  }
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
}
.container {
  max-width: 600px;
  margin: 30px;
}
</style>
