<template>
  <bloks class="column" :class="blok.modifiers" :bloks="blok.body"></bloks>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>
