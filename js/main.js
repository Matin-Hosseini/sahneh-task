const { createApp, reactive, ref } = Vue;

createApp({
  setup() {
    const message = ref("matin");
    const phoneNumber = "0912***541";

    const activeTab = ref("enter");

    const setActive = (tab) => {
      activeTab.value = tab;
    };

    const isActive = (tab) => {
      return activeTab.value === tab;
    };

    return {
      message,
      phoneNumber,
      activeTab,
      setActive,
      isActive,
    };
  },
}).mount("#app");
