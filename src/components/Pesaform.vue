<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Pesaform</h5>
        <h6 class="card-subtitle">ID: {{pesaform.ID}}</h6>
        <div class="level-list">
          <ul class="list-group">
            <li v-for="index in 8" :key="index" class="list-group-item">
              <h4>{{index - 1}}</h4>
              <h6 v-if="pesaform.users.length >= index">{{pesaform.users[0].name}}</h6>
              <h6 v-else>No user in this position</h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pesaform: {}
    };
  },
  mounted() {
    fetch(`https://egoparkeastafrica.com/api/pesaform/id/${this.ID}`)
      .then(res => res.json())
      .then(res => (this.pesaform = res))
      .catch(err => console.log(err));
  },
  props: ["ID"]
};
</script>

<style scoped>
.list-group-item {
  display: flex;
  justify-content: space-between;
}
</style>
