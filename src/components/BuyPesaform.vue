<template>
  <div class="container">
    <h1>{{_id}}</h1>
    <Pesaform :_id="_id"/>
  </div>
</template>

<script>
import Pesaform from "./Pesaform";
export default {
  data() {
    return {
      _id: this.$route.params.id
    };
  },
  components: {
    Pesaform
  }
};
</script>

<style>
</style>
