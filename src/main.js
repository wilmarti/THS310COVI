// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
import LoadScript from 'vue-plugin-load-script';

Vue.use(LoadScript);
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Vuelidate);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.loadScript("https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY").then(() => {
    // Código en caso de que tu script cargue
}).catch(() => {
    // Código en caso de que la carga de tu script fallé
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
