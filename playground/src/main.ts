import { createApp } from 'vue'
import VirtualScroller from '../../src/index'
import App from './App.vue'

const app = createApp(App)

app.use(VirtualScroller)

app.mount('#app')
