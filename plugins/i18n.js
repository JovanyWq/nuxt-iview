import Vue from 'vue';
import VueI18n from 'vue-i18n';

import iView_zhCN from "iview/dist/locale/zh-CN";
import iView_enUS from "iview/dist/locale/en-US";

import zh from "~/locales/zh.js";
import en from "~/locales/en.js";

const localeMessages = {zh, en}

Vue.locale = () => {};
Vue.use(VueI18n);

export default ({app, store}) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: 'zh',
    messages: {
      zh: {
        welcome: "欢迎你！",
        ...iView_zhCN,
        ...localeMessages['zh']
      },
      en: {
        welcome: "Welcome!",
        ...iView_enUS,
        ...localeMessages['en']
      }
    }
  });
};
