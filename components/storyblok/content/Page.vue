<template>
  <div v-editable="blok">
    <component v-for="item in blok.body" :blok="item" :is="item.component" :key="item._uuid"></component>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>
