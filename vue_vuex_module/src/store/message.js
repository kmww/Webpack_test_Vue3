export default {
  namespaced: true,
  state() {
    return {
      message: "Hello Store Module",
    };
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  getters: {
    reversedMessage(state) {
      return state.message.split("").reverse().join("");
    },
  },
  actions: {
    async fetchTodo({ commit }) {
      const todo = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      ).then((res) => res.json());
      console.log(todo);
      commit("updateMessage", todo.title);
    },
  },
};
