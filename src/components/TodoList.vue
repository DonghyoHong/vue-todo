<template>
  <div>
    <TransitionGroup name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" :key="todoItem" class="shadow">
        <i class="checkBtn fa fa-solid fa-check"
           :class="{checkBtnCompleted: todoItem.completed}"
           @click="toggleComplete({todoItem})">
        </i>
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem})">
          <i class="fa fa-solid fa-trash"></i>
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  computed: {
    /*...mapState(['todoItems'])
    , */...mapGetters(["storedTodoItems"])
    // 객체로 쓰는 경우에는 ...mapGetters({key (담을 키): value(store의 method 명)})
  }
  , methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem' //위의 메소드에서 인자가 두개인 경우는 {todoItem, index}이런 식으로 쓰면 됨
      , toggleComplete: 'completeOneItem'
    })
    /*, removeTodo(todoItem) {
      //this.$emit('removeItem', todoItem, index);
      this.$store.commit("removeOneItem", {todoItem});
    }
    , toggleComplete(todoItem) {
      //this.$emit('completeItem', todoItem, index);
      this.$store.commit("completeOneItem", {todoItem});
    }*/
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>