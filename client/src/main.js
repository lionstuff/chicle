import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from '@/router';
import store from '@/store';

import '@/plugins';
import vuetify from '@/plugins/vuetify';
import '@/components';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,

  render: function(h) {
    return h(App);
  }
}).$mount('#app');
