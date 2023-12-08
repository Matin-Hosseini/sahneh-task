const { createApp, ref } = Vue;
import userSvgAlphabetLink from "./utils/userSvgAlphabetLink.js";

const app = createApp({
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

    const userName = ref("علی رضایی");
    const svgLink = userSvgAlphabetLink(userName.value);

    return {
      message,
      phoneNumber,
      activeTab,
      setActive,
      isActive,
      svgLink,
    };
  },
})

app.mount("#app");
