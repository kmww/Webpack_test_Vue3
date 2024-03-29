import { reactive } from "vue";

export const state = reactive({
  msg: "Hello Vue?!",
  count: 1,
});

export const getters = {
  reversedMsg() {
    return state.msg.split("").reverse().join("");
  },
};

export const mutations = {
  increaseCount() {
    state.count += 1;
  },
  decreaseCount() {
    state.count -= 1;
  },
  updateMsg(newMsg) {
    state.msg = newMsg;
  },
};

export const actions = {
  async fetchTodo() {
    const todo = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    ).then((res) => res.json());
    console.log(todo);
    mutations.updateMsg(todo.title);
  },
};
