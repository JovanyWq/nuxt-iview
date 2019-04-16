export const state = () => ({
  locales: ['en', 'zh'],
  locale: 'en'
})

export const mutations = {
  setLocale(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
