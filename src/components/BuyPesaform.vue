<template>
  <div class="container">
    <h1>{{ID}}</h1>
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
  }
};
</script>

<style>
</style>
