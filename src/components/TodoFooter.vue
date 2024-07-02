<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodos">Clear All</span>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
// setup(){
  data() {
    return {}
  }, methods: {
    ...mapMutations({
      clearTodos: 'clearAllItems',
    })
    /*clearTodos() {
      //this.$emit("clearAllItems");
      this.$store.commit("clearAllItems");
    }*/
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>
.clearAllContainer {
  width: 4.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: auto;
  margin-top: 10px;
}

.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>