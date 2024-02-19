import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarkerAlt, faEnvelope, faBuilding, faWrench, faUniversity, faPaintBrush, faMagic, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also import the CSS file in your Vue component

AOS.init();

library.add(faMapMarkerAlt, faEnvelope, faBuilding, faWrench, faUniversity, faPaintBrush, faMagic, faBullhorn)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')