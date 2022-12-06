<template>
  <h1>{{ msg }}</h1>
  <h2>{{ storeMsg }}</h2>
  <h2>{{ storeMessage }}</h2>
  <Hello />
</template>

<script>
import Hello from "~/components/Hello";

export default {
  components: {
    Hello,
  },
  computed: {
    storeMsg() {
      return this.$store.state.msg;
    },
    storeMessage() {
      return this.$store.state.message.message;
    },
  },
  data() {
    return {
      msg: "Hello Vue",
    };
  },
};
</script>
