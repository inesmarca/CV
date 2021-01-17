import Vue from 'vue'
import helper from '@/plugins/helper'
import App from '@/App.vue'
import '@/plugins/vuetify'
import '@/components'
import { messages } from '@/plugins/i18n'
import VueI18n from "vue-i18n";
import vuetify from './plugins/vuetify';
Vue.use(VueI18n)

Vue.config.productionTip = false
Vue.use(helper)

// Create VueI18n instance with options
export const i18n = new VueI18n({
    locale: 'es', // set locale
    messages, // set locale messages
})

new Vue({
    render: (h) => h(App),
    vuetify,
    i18n
}).$mount('#app')