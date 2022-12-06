<template>
  <button>
    <slot>Leon</slot>
  </button>
</template>

<style scoped lang="scss">
button {
  padding: 10px 20px;
  &:hover {
    background-color: orange;
    transform: scale(1.2);
  }
}
</style>
