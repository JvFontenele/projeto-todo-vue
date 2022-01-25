import { createStore } from 'vuex'

export default createStore({
  state: {
    todoLista: ["lavar a roupa", "fazer a janta", "arrumar a cama"]
  },
  mutations: {
    EXCLUIR_TODO(state, payload) {
      state.todoLista.splice(payload, 1)
    },
    ADICIONAR_TODO(state, payload) {
      state.todoLista.push(payload)
    },
    EDITAR_TODO(state, payload) {
      state.todoLista[payload.id] = payload.novo
    },
  },
  actions: {
  },
  modules: {
  }
})
