<template>
  <div class="container">
    <Pesaform :ID="ID"/>
  </div>
</template>

<script>
import Pesaform from "./Pesaform";
export default {
  data() {
    return {
      ID: this.$route.params.id
    };
  },
  components: {
    Pesaform
  },
  mounted() {
    if (!this.ID)
      fetch("https://egoparkeastafrica.com/api/pesaform/one")
        .then(res => res.json())
        .then(res => (ID = res._id));
  }
};
</script>

<style>
</style>
