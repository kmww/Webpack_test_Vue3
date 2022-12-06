import { createApp } from "vue";
import fetchPlugin from "~/plugins/fetch";
import App from "~/App";
import Btn from "~/components/Btn";
import World from "~/components/World";

const app = createApp(App);
app.use(fetchPlugin, {
  pluginName: "$myname",
});
app.mount("#app");
