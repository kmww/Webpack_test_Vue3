<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>
  <teleport to="body">
    <template v-if="modelValue">
      <div class="modal" @click="offModal">
        <div
          class="modal__inner"
          @click.stop
          :style="{ width: `${parseInt(width, 10)}px` }"
        >
          <button v-if="closable" class="close" @click="offModal">x</button>
          <slot></slot>
        </div>
      </div>
    </template>
  </teleport>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    width: {
      type: [String, Number],
      default: 400,
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(newValue) {
      if (newValue) {
        window.addEventListener("keyup", this.keyupHandler);
      } else {
        window.removeEventListener("keyup", this.keyupHandler);
      }
    },
  },
  methods: {
    onModal() {
      this.$emit("update:modelValue", true);
    },
    offModal() {
      this.$emit("update:modelValue", false);
    },
    keyupHandler(e) {
      if (e.key === "Escape") {
        console.log("ESC");
        this.offModal();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 0.3rem;
    box-shadow: 0 10px 10px rgba(black, 0.2);
    button.close {
      float: right;
    }
  }
}
</style>
