<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users" :key="user._id">
        <h5>Name:</h5>
        <p>{{ user.name }}</p>
        <h5>Email:</h5>
        <p>{{ user.email }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    fetch("https://egoparkeastafrica.com/api/users")
      .then(res => res.json())
      .then(res => (this.users = res.users));
  }
};
</script>

<style>
</style>
