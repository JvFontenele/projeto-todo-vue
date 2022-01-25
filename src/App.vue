<template>
  <div>
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp.vue";

export default {
  name: "App",
  components: {
    TodoApp,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0%;
  padding: 0%;
}
body {
  background: rgb(171, 130, 238);
}

ul {
  list-style: none;
}
button {
  cursor: pointer;
}
</style>
