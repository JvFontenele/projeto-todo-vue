<template>
  <div class="editarTodo">
    <input
      @keyup.enter="editar(index, novoTodo)"
      type="text"
      v-model="novoTodo"
    />
    <button @click="editar(index, novoTodo)">CONF</button>
    <button @click="editarTodo">X</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "EditarTodo",
  data() {
    return {
      novoTodo: "",
    };
  },
  props: ["index", "editarTodo"],
  methods: {
    ...mapMutations(["EDITAR_TODO", "MOSTRAR_ALERTA"]),
    editar(index, novo) {
      this.MOSTRAR_ALERTA(index);
      this.EDITAR_TODO({ id: index, novo: novo });
      this.editarTodo();
      this.novoTodo = "";
    },
  },
};
</script>

<style>
.editarTodo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-bottom: 10px;
}
.editarTodo input {
  background: none;
  border-radius: 5px;
  border: 1px solid white;
  padding: 5px;
  color: white;
}
.editarTodo button {
  background: none;
  border: none;
  color: white;
  margin-left: 5px;
}
</style>