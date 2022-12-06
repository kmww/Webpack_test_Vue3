<template>
  <h1>Hello.vue</h1>
  <div>{{ count }}</div>
  <button @click="increaseCount">+</button>
  <button @click="decreaseCount">-</button>
  <div>{{ message }} / {{ reversedMessage }}</div>
  <div>{{ msg }}</div>
  <button @click="fetchTodo">update</button>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["msg"]),
    ...mapState("count", ["count"]),
    ...mapState("message", ["message"]),
    ...mapGetters("message", ["reversedMessage"]),
    // count() {
    //   return this.$store.state.count.count;
    // },
    // message() {
    //   return this.$store.state.message.message;
    // },
    // reversedMessage() {
    //   return this.$store.getters["message/reversedMessage"];
    // },
  },
  methods: {
    ...mapMutations("count", ["increaseCount", "decreaseCount"]),
    ...mapActions("message", ["fetchTodo"]),
    // increaseCount() {
    //   this.$store.commit("count/increaseCount");
    // },
    // decreaseCount() {
    //   this.$store.commit("count/decreaseCount");
    // },
    // fetchTodo() {
    //   this.$store.dispatch("message/fetchTodo");
    // },
  },
};
</script>

<style scoped lang="scss">
$color: red;

h1 {
  color: $color;
}
</style>
