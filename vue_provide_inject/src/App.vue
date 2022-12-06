<template>
  <h1 @click="msg += '!!'">{{ msg }}</h1>
  <Parent />
</template>

<script>
import Parent from "~/components/Parent";
import { computed } from "vue";

export default {
  components: {
    Parent,
  },
  // provide는 data 위에 작성
  provide() {
    return {
      msg: computed(() => this.msg),
    };
  },
  data() {
    return {
      msg: "Hello Vue",
    };
  },
};
</script>
