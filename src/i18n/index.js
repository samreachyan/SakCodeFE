import Vue from 'vue'
import VueI18n from 'vue-i18n'
// ivew UI
// មិនមាន view design ​library ជាភាសាខ្មែរ
import ivenUS from 'view-design/dist/locale/en-US'
// import ivenKH from 'view-design/dist/locale/km-KH'
// import ivenVN from 'view-design/dist/locale/vi-VN'

// element UI
import elenUS from 'element-ui/lib/locale/lang/en'
import elenKM from 'element-ui/lib/locale/lang/km'

Vue.use(VueI18n)

const languages = [
  {value: 'en-US', label: 'English', iv: ivenUS, el: elenUS},
  // {value: 'km-KH', label: 'ភាសាខ្មែរ', iv: ivenKH, el: elenKM}
  {value: 'vi-VN', label: 'ភាសាខ្មែរ', iv: ivenUS, el: elenKM}
]
const messages = {}

// combine admin and oj
for (let lang of languages) {
  let locale = lang.value
  let m = require(`./oj/${locale}`).m
  Object.assign(m, require(`./admin/${locale}`).m)
  let ui = Object.assign(lang.iv, lang.el)
  messages[locale] = Object.assign({m: m}, ui)
}
// load language packages
export default new VueI18n({
  locale: 'vi-VN',
  messages: messages
})

export {languages}
