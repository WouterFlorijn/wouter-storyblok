import Markdown from './Markdown'
import Bubble from './Bubble'

export default {
  install (Vue, options) {
    Vue.component('markdown', Markdown)
    Vue.component('bubble', Bubble)
  }
}
