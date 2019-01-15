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
  }
};
</script>

<style>
</style>
