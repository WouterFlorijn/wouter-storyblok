<template>
  <div class="container">
    <bloks :bloks="blok.body"></bloks>
  </div>
</template>

<script>
  export default {
    props: ['blok']
  }
</script>
