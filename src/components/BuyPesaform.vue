<template>
  <div class="container">
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
