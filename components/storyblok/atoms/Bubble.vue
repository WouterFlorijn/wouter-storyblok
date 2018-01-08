<template>
  <div class="bubble" :style="style">
    <div class="bubble-text">{{ blok.text }}</div>
  </div>
</template>

<script>
  export default {
    props: ['blok'],
    computed: {
      style () {
        return {
          backgroundImage: 'url(' + this.blok.image + ')'
        }
      }
    }
  }
</script>
