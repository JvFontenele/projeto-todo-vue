<template>
  <div class="todo">
    <p>{{ todo }}</p>
    <div>
      <button @click="mostrar(index)">X</button>
      <button @click="abrirEditor(index)">edit</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Todo",
  props: ["todo", "index", "abrirEditor"],
  methods: {
    ...mapMutations(["EXCLUIR_TODO", "EDITAR_TODO"]),
    mostrar(index) {
      this.EXCLUIR_TODO(index);
    },
  },
};
</script>

<style>
.todo {
  background: rgb(182, 75, 209);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 50px;
  border-radius: 5px;
  color: white;
  margin: 0 auto 10px auto;
  padding: 22px;
}
.todo p {
  max-width: 100px;
  min-width: 100px;
  overflow: hidden;
}

.todo button {
  background: none;
  border: none;
  margin-left: 8px;
}

.todo img {
  width: 20px;
}
</style>