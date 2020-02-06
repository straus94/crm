import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faTrashAlt, faPencilAlt, faCheckCircle, faBell, faEnvelope, faHome, faUsers, faBriefcase, faTimesCircle, faTasks, faPaperPlane, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus, faTrashAlt, faPencilAlt, faCheckCircle, faBell, faEnvelope, faHome, faUsers, faBriefcase, faTimesCircle, faTasks, faPaperPlane, faArrowCircleLeft, faArrowCircleRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
