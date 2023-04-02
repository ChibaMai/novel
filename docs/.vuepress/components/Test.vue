<template>
  <div class="test" v-if="false">111</div>
</template>

<script>
export default {
  data() {
    return {
      swtichTest: false
    }
  },

  mounted() {
  },

  watch: {
    $route(to, from) {
      if (to.path === "/pages/8f2168/") {
        this.swtichTest = true
      } else {
        this.swtichTest = false
      }
    },
    swtichTest(to, from) {
      console.log(to, from);
    }
  }

}
</script>

<style>
</style>
