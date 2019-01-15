<template>
  <div class="container">
    <Pesaform v-if="ID !== null" :ID="ID"/>
    <button class="btn btn-dark">Buy</button>
  </div>
</template>

<script>
import Pesaform from "./Pesaform";
export default {
  data() {
    return {
      ID: null
    };
  },
  components: {
    Pesaform
  },
  mounted() {
    if (!this.$route.params.id)
      fetch("https://egoparkeastafrica.com/api/pesaform/one")
        .then(res => res.json())
        .then(res => {
          this.ID = res._id;
        });
    else this.ID = this.$route.params.id;
  }
};
</script>

<style>
</style>
