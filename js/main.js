const { createApp, reactive , ref} = Vue;

createApp({
  setup() {
    const message = ref("matin");

    return {
      message,
    };
  },
}).mount("#app");

