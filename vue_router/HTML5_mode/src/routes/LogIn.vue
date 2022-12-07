<template>
  <form @submit.prevent>
    <input v-model="userID" placeholder="ID" type="text" />
    <input v-model="userPW" palceholder="PW" type="password" />
    <button @click="logIn">Log In</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userID: "",
      userPW: "",
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch("user/logIn", {
        id: this.userID,
        pw: this.userPW,
      });
    },
  },
};
</script>
