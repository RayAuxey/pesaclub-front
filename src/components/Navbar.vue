<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link class="navbar-brand" to="/">The Pesa Club</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link active" to="/">Home</router-link>
          <router-link class="nav-item nav-link" to="/buy">Buy Pesaform</router-link>
          <router-link class="nav-item nav-link" to="/mylist">Your Pesaforms</router-link>
          <router-link class="nav-item nav-link" to="/allusers" href="#">All Users</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
nav {
  min-width: 100vw;
  box-shadow: 0px 5px 10px black;
}
.navbar-brand {
  text-transform: uppercase;
  padding: 7px;
  border: 2px solid white;
  box-shadow: 0px 5px 5px black;
}
</style>
