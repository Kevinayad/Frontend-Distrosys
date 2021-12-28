import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMqtt from 'vue-mqtt'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueGeoLocation from "vue-browser-geolocation";
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAP_ACCESS_TOKEN,
    libraries: 'places'
  }//,
  //installComponents: false
});
Vue.use(VueGeoLocation)


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Make Mqtt available throughout your project
Vue.use(VueMqtt, 'mqtt://127.0.0.1:1883', {clientId: 'WebClient-' + parseInt(Math.random() * 100000)})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
