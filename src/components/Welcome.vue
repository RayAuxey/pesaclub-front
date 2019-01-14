<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="user in users" :key="user._id">{{user.name}}</li>
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
      .then(res => {
        this.users = res.users;
      });
  }
};
</script>

<style>
.container {
  max-width: 600px;
}
</style>
