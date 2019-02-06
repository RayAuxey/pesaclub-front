<template>
  <div>
    <div class="jumbotron">
      <h5 class="card-title">Pesaform</h5>
      <h6 class="card-subtitle">ID: {{pesaform._id}}</h6>
      <div class="level-list">
        <div class="list-title">
          <h3>Level</h3>
          <h3>Name</h3>
        </div>
        <ul class="list-group">
          <li v-if="pesaform.level_0" class="list-group-item">
            <div>
              <p>0</p>
            </div>
            <div>{{pesaform.level_0.name}}</div>
          </li>
          <li v-if="pesaform.level_1" class="list-group-item">
            <div>
              <p>1</p>
            </div>
            <div>{{pesaform.level_1.name}}</div>
          </li>
          <li v-if="pesaform.level_2" class="list-group-item">
            <div>
              <p>2</p>
            </div>
            <div>{{pesaform.level_2.name}}</div>
          </li>
          <li v-if="pesaform.level_3" class="list-group-item">
            <div>
              <p>3</p>
            </div>
            <div>{{pesaform.level_3.name}}</div>
          </li>
          <li v-if="pesaform.level_4" class="list-group-item">
            <div>
              <p>4</p>
            </div>
            <div>{{pesaform.level_4.name}}</div>
          </li>
          <li v-if="pesaform.level_5" class="list-group-item">
            <div>
              <p>5</p>
            </div>
            <div>{{pesaform.level_5.name}}</div>
          </li>
          <li v-if="pesaform.level_6" class="list-group-item">
            <div>
              <p>6</p>
            </div>
            <div>{{pesaform.level_6.name}}</div>
          </li>
          <li v-if="pesaform.level_7" class="list-group-item">
            <div>{
              <p>7</p>
            </div>
            <div>{{pesaform.level_7.name}}</div>
          </li>
        </ul>
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
.list-group-item,
.list-title {
  display: flex;
  justify-content: space-between;
}
.level-list {
  margin-top: 20px;
}
.jumbotron {
  box-shadow: -1px 2px 5px #343a40, 1px 2px 5px #343a40;
}
</style>
