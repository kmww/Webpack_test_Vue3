<template>
  <h1>
    {{ message }}
    <HelloWorld />
  </h1>
</template>

<script>
import HelloWorld from "~/componets/HelloWorld.vue"

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      message: "Hello Vue!!!"
    }
  }
  
}
</script>