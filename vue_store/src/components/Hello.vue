<template>
  <h1>Hello.vue</h1>
  <div>{{ msg }}</div>
  <div @click="increaseCount">{{ count }}</div>
  <button @click="fetchTodo">Get Todo!</button>
</template>

<script>
import { state, mutations, actions } from "~/store";

export default {
  data() {
    return state;
  },
  methods: {
    increaseCount: mutations.increaseCount,
    fetchTodo: actions.fetchTodo,
  },
};
</script>

<style scoped lang="scss">
$color: red;

h1 {
  color: $color;
}
</style>
