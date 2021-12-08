import { createApp } from 'vue'
import App from './App.vue'

//import Vue from 'vue'
//import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'

import Axios from 'axios'
import VueAxios from 'vue-axios'

//Vue.config.productionTip = false
//Vue.use(BootstrapVue);
//Vue.use(IconsPlugin);
//App.use(VueAxios, Axios);
createApp(App).use(VueAxios, Axios)

createApp(App).mount('#app')