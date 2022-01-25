<template>
  <div class="inputTodo">
    <input
      @keyup.enter="adicionarTodo(novoTodo)"
      type="text"
      v-model="novoTodo"
    />
    <button @click="adicionarTodo(novoTodo)">ADD</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "InputTodo",
  data() {
    return {
      novoTodo: "",
    };
  },
  methods: {
    ...mapMutations(["ADICIONAR_TODO"]),
    adicionarTodo(novo) {
      if (novo != "") {
        this.ADICIONAR_TODO(novo);
        this.novoTodo = "";
      }
    },
  },
};
</script>

<style>
.inputTodo {
  padding: 20px;
  text-align: center;
}
.inputTodo input,
.inputTodo button {
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 5px;
}
.inputTodo input {
  margin-right: 10px;
  background: rgb(67, 139, 136);
  color: white;
}
.inputTodo input::placeholder {
  color: rgba(238, 238, 238, 0.603);
}
.inputTodo button {
  background: goldenrod;
}
</style>