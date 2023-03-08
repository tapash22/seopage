import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'

import ApexChart from './plugin/ApexChart';

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  ApexChart,
  render: h => h(App)
}).$mount('#app')
