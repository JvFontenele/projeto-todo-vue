<template>
  <transition-group name="fade" mode="out-in" tag="ul" class="lista">
    <li v-for="(todo, index) in $store.state.todoLista" :key="todo">
      <Todo :todo="todo" :index="index" :abrirEditor="abrirEditor" />
      <div v-if="ligarEditor == index + 1">
        <EditarTodo :index="index" :editarTodo="editarTodo" />
      </div>
    </li>
  </transition-group>
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translate3d(-20px, 0, 0);
}
</style>