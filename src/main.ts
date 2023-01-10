import '@/config/register-service-worker';
import router from '@/config/router';
import App from '@/pages/app/app.vue';
import store from '@/store';
import '@/theme/_all.scss';
import 'tailwindcss/tailwind.css';
import Vue from 'vue';
import Buefy from 'buefy';
import i18n from '@/config/i18n';

Vue.use(Buefy, {
	defaultIconComponent: 'font-awesome-icon',
	defaultIconPack: 'fas',
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
