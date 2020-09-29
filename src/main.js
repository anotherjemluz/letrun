import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// COMPONENTS
// import ProjTemplate from './components/template/ProjTemplate'
// Vue.component('proj-template', ProjTemplate)

// PLUGINS
import vueHeadful from 'vue-headful'
Vue.component('vue-headful', vueHeadful)

import AOS from 'aos'
import 'aos/dist/aos.css'

import Toasted from 'vue-toasted'
Vue.use(Toasted)

// FONTAWESOME ICONS 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faShoppingCart,
  faSearch,
  faArrowRight, 
  faArrowLeft,
  faArrowDown,
  faArrowUp,
  faUserCircle,

  faPlus,
  faMinus,
} from '@fortawesome/free-solid-svg-icons'

import { 
  faWhatsapp,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

Vue.component('fa-icon', FontAwesomeIcon)
library.add(
  faShoppingCart,
  faSearch,
  faArrowRight, 
  faArrowLeft, 
  faArrowDown,
  faArrowUp,
  faUserCircle,


  faPlus,
  faMinus,
  faWhatsapp,
  faInstagram,
)

new Vue({
  created() {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
