import Story from './Story'
import Bloks from './Bloks'

import Content from './content'
import Atoms from './atoms'
import Grid from './grid'
import Sections from './sections'

export default {
  install (Vue, options) {
    Vue.component('story', Story)
    Vue.component('bloks', Bloks)
    Vue.use(Content)
    Vue.use(Atoms)
    Vue.use(Grid)
    Vue.use(Sections)
  }
}
