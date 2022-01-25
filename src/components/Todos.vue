<template>
  <ul class="lista">
    <li v-for="(todo, index) in $store.state.todoLista" :key="todo + index">
      <Todo :todo="todo" :index="index" :abrirEditor="abrirEditor" />
      <div v-if="ligarEditor == index + 1">
        <EditarTodo :index="index" :editarTodo="editarTodo" />
      </div>
    </li>
  </ul>
</template>

<script>
import Todo from "@/components/Todo.vue";
import EditarTodo from "@/components/EditarTodo.vue";
export default {
  data() {
    return {
      ligarEditor: 0,
    };
  },
  components: {
    Todo,
    EditarTodo,
  },
  methods: {
    editarTodo() {
      this.ligarEditor = 0;
    },
    abrirEditor(index) {
      this.ligarEditor = index + 1;
    },
  },
};
</script>

<style>
.lista {
  height: 350px;
  overflow-y: scroll;
}
.lista::-webkit-scrollbar {
  background: none;
  height: 5px;
  width: 0px;
}
</style>