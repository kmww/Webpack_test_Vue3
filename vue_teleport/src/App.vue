<template>
  <div style="transform: scale(1)">
    <Modal v-model="isShow" width="300">
      <template #activator>
        <button>On Modal!</button>
      </template>
      <h3>App.vue</h3>
    </Modal>
    <Hello />
  </div>
</template>

<script>
import Hello from "~/components/Hello";

export default {
  components: {
    Hello,
  },
  data() {
    return {
      msg: "Hello Vue",
      isShow: false,
    };
  },
};
</script>
