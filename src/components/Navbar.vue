<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">The Pesa Club</a>
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
          <router-link to="/">
            <a class="nav-item nav-link active" href="#">
              Home
              <span class="sr-only">(current)</span>
            </a>
          </router-link>
          <a class="nav-item nav-link" href="#">Buy Pesaform</a>
          <a class="nav-item nav-link" href="#">Your Pesaforms</a>
          <router-link to="/allusers">
            <a class="nav-item nav-link" href="#">All Users</a>
          </router-link>
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
  width: 100%;
}
</style>
