import '@/config/register-service-worker';
import router from '@/config/router';
import App from '@/pages/app/app.vue';
import store from '@/store';
import '@/theme/_all.scss';
import 'tailwindcss/tailwind.css';
import Vue from 'vue';
import Buefy from 'buefy';
import i18n from '@/config/i18n';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faHouse,faBell,faHashtag,faEnvelope,faBookmark,faRectangleList,faUser,faEllipsis,faFeatherPointed,faImage,faList,faFaceSmile,faCalendar,faLocationDot,faComment,faRepeat,faHeart,faChartSimple } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse,faHashtag,faBell,faEnvelope,faBookmark,faRectangleList,faUser,faEllipsis,faFeatherPointed,faImage,faList,faFaceSmile,faCalendar,faLocationDot,faComment,faRepeat,faHeart,faChartSimple);

Vue.component('font-awesome-icon', FontAwesomeIcon)

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
