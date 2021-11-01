import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { reactive } from "vue";
import { ref } from "vue";

createApp(App).use(store).use(router).mount("#app");

// reactive method
// object only
const state = reactive({
  count: 0,
});
console.log(state);

// ref method
// primitive
const countRef = ref(0);
console.log(countRef);
