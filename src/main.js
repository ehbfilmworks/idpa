import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
import {fas} from "@fortawesome/free-solid-svg-icons"
import {far} from "@fortawesome/free-regular-svg-icons"
import { fab } from '@fortawesome/free-brands-svg-icons'; // für 'fab'

import './assets/main.scss';
import './assets/home';
import './assets/footer.scss';
import './assets/cards.scss';
import './assets/video.scss';
import './assets/project.scss';
import './assets/info.scss';
import './assets/iframe.scss';

library.add(fas, far,fab)
const app = createApp(App)

/* add font awesome icon component */
app.use(router)

app.mount('#app')
