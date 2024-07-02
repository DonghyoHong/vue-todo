<template>
  <header>
    <h1>{{ this.headerText }}</h1>
  </header>
</template>

<script>
import {mapState} from "vuex";

export default {
// setup(){
  data() {
    return {}
  }
  , computed: {
    ...mapState(['headerText'])
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>