<template>
  <div class="container">
    <h3>Welcome to The PesaClub</h3>
    <h5>Please register here</h5>
    <form class="jumbotron">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Enter name"
          v-model="user.name"
        >
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="user.email"
        >
        <small
          id="emailHelp"
          class="form-text text-muted"
        >We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          v-model="user.password"
        >
      </div>
      <button type="submit" @click.prevent="signup" class="btn btn-dark">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signup() {
      fetch("https://egoparkeastafrica.com/api/users/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        body: JSON.stringify(this.user)
      })
        .then(res => res.json())
        .then(res => {
          alert("You have successfully signed in");
        });
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container > * {
  margin-bottom: 20px;
}

form {
  border: 1px solid #343a40;
  box-shadow: -1px 2px 5px #343a40, 1px 2px 5px #343a40;
}
</style>
