<template>
  <div>
    <a href="www.baidu.com">百度</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a:after{content:" (" attr(href) ") ";}
</style>
