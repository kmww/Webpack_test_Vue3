import router from "~/routes";
import { createApp } from "vue";
import App from "~/App";

const app = createApp(App);
app.use(router);
app.mount("#app");
