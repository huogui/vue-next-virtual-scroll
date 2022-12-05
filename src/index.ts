import type { App } from 'vue'
import VirtualScroller from './components/virtual-scroller.vue'

export * from './components/virtual-scroller'

export { VirtualScroller }

export default {
  install(app: App) {
    app.component('VirtualScroller', VirtualScroller)
  },
}

