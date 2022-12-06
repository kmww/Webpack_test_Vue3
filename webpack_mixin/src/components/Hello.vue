<template>
  <h1>{{ msg }}</h1>
  <h1>{{ count }}</h1>
</template>

<script>
import smapleMixin from "~/mixins/sample";
export default {
  mixins: [smapleMixin],
};
</script>

<style scoped lang="scss">
$color: red;

h1 {
  color: $color;
}
</style>
