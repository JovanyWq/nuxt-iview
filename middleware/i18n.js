export default function ({isHMR, app, route, store, error, req}) {
  if (isHMR) return
  const localeInCookies = app.$cookies.get("lang")
  const [localeInBrowser] = req.headers['accept-language'].split(/,|;|q=\d+\.\d+/)
    .filter(i => i.length > 0 && store.state.locales.includes(i))
  const defaultLocale = app.i18n.fallbackLocale
  const locale = route.query.lang || localeInCookies || localeInBrowser || defaultLocale
  if (!store.state.locales.includes(locale)) {
    return error({message: 'This page could not be found.', statusCode: 404})
  }
  if (localeInCookies !== locale) {
    app.$cookies.set("lang", locale)
  }
  if (store.state.locale === locale) return
  app.i18n.locale = locale
  store.commit('setLocale', locale)
}
