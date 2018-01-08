<template>
  <bloks class="columns" :class="blok.modifiers" :bloks="blok.columns"></bloks>
</template>

<script>
export default {
  props: ['blok']
}
</script>
