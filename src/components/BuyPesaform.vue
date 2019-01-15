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
          console.log(this.$route.params.id);
        });
    else this.ID = this.$route.params.id;
  }
};
</script>

<style>
</style>
