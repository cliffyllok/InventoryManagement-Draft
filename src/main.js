import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
import router from "./router/index";
import { store } from "./store/index";
import format from "date-fns/format";
import VuejsDialog from "vuejs-dialog";
import CmpAlert from "./components/shared/Alert.vue";
import Parse from "parse";
import * as firebase from "firebase";
import ToggleButton from "vue-js-toggle-button";

Vue.component("app-alert", CmpAlert);

Vue.use(ToggleButton);

Vue.use(Vuetify, {
  theme: {
    primary: "#037367",
    secondary: "#00281f",
    accent: "#4a7eb3",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

Vue.use(VuejsDialog, {
  html: true,
  okText: "Proceed",
  cancelText: "Cancel",
  animation: "zoom"
});

Vue.directive("focus", {
  inserted: function(el) {
    el.__vue__.focus();
  }
});

Vue.config.productionTip = false;

Vue.filter("formatDateFull", function(value) {
  if (value) {
    return format(value, "dddd MMMM Do YYYY");
  }
});

Vue.filter("formatDate", function(value) {
  if (value) {
    return format(value, "MMMM Do YYYY");
  }
});

Vue.filter("formatDateShort", function(value) {
  if (value) {
    return format(value, "MM-DD-YYYY");
  }
});

new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App),
  created() {
    if (this.$store.state.user === null) {
      console.log("not logged in");
      //console.log(this.$store);
      //this.$router.push("/signIn");
      this.$router.push("/bulkInput");
    }
  }
});
