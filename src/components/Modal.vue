<template>
  <div class="modal">
    <InputTodo />
    <Todos />
  </div>
</template>

<script>
import InputTodo from "./InputTodo.vue";
import Todos from "./Todos.vue";
export default {
  name: "TodoApp",
  components: {
    InputTodo,
    Todos,
  },
};
</script>

<style>
body {
  background: rgb(255, 150, 30);
}
.modal {
  margin: 50px auto;
  text-align: center;
  background: rgb(84, 68, 102);
  width: 350px;
  height: 450px;
  border-radius: 5px;
}
</style>
