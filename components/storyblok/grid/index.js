import Container from './Container'
import Row from './Row'
import Column from './Column'

export default {
  install (Vue, options) {
    Vue.component('container', Container)
    Vue.component('row', Row)
    Vue.component('column', Column)
  }
}
