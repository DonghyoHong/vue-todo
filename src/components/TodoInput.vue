<template>
  <div class="inputBox shadow">
    <input id="itemId" type="text" v-model="newTodoItem" placeholder="입력" @keyup.prevent.enter="addTodo"/>
    <!--    <button class="addBtn" @click="addTodo">add</button>-->
    <span class="addContainer" @click.prevent="addTodo">
      <i class="fa fa-solid fa-plus addBtn"></i>
    </span>

    <Teleport to="body">
      <!-- use the modal component, pass in the prop -->
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>ToDo 입력
            <a class="colorModalBtn" @click="showModal = false"> X</a>
          </h3>
        </template>
        <template #body>
          내용 입력 해주세요.
        </template>
      </modal>
    </Teleport>
  </div>
</template>

<script>
import Modal from "@/components/common/Modal.vue";

export default {
// setup(){
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  }
  , mounted() {
  }
  , methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        //this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit("addOneItems", this.newTodoItem.trim());
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    }
    , clearInput() {
      this.newTodoItem = "";
    }
  }
  , components: {
    Modal
  }
}
</script>

<!--<style lang="scss" scoped>-->
<style>
input:focus {
  outline: none;
}

.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 3px 3px 0;
}

.addBtn {
  color: black;
  vertical-align: middle;
}

.colorModalBtn {
  color: #42b983;
}

</style>