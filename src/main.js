import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar';
import Card from 'primevue/card';

// createApp(App).mount('#app');
const app = createApp(App);
app.use(router)
app.use(PrimeVue);


app.component('v-toolbar', Toolbar);
app.component('v-button', Button);
app.component('v-card', Card);

app.mount('#app');
