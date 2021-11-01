import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { reactive } from "vue";

createApp(App).use(store).use(router).mount("#app");

const state = reactive({
  count: 0,
});
console.log(state);
