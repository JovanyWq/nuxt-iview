export default function ({isHMR, app, route, store, error, req}) {
  const langInCookies = app.$cookies.get("lang")
  const [browserLanguage] = req.headers['accept-language'].split(/,|;|q=\d+\.\d+/)
    .filter(i => i.length > 0 && store.state.locales.includes(i))
  const defaultLocale = app.i18n.fallbackLocale
  if (isHMR) return
  const locale = route.query.lang || langInCookies || browserLanguage || defaultLocale
  if (!store.state.locales.includes(locale)) {
    return error({message: 'This page could not be found.', statusCode: 404})
  }
  if (!langInCookies || (route.query.lang && route.query.lang !== langInCookies)) {
    app.$cookies.set("lang", locale)
  }
  app.i18n.locale = locale
  store.commit('setLocale', locale)
}
