<template>
  <div>
    <component v-for="blok in bloks" :blok="blok" :is="blok.component" :key="blok._uuid"></component>
  </div>
</template>

<script>
  export default {
    props: ['bloks']
  }
</script>
