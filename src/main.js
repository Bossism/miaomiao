import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // ./router/index.js vue省略了index.js
import store from './store'

createApp(App).use(store).use(router).mount('#app')
