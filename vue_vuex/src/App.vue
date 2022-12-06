<template>
  <h1>{{ msg }}</h1>
  <button @click="increaseCount">increase!</button>
  <Hello />
  <World />
  <button @click="fetchTodo">update</button>
</template>

<script>
import Hello from "~/components/Hello";
import World from "~/components/World";

export default {
  components: {
    Hello,
    World,
  },
  data() {
    return {
      msg: "Hello Vue",
    };
  },
  methods: {
    increaseCount() {
      this.$store.commit("increaseCount");
    },
    fetchTodo() {
      this.$store.dispatch("fetchTodo");
    },
  },
};
</script>
