<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns flex-center">
          <div class="column is-narrow">
            <h1 class="title">
              {{ blok.headline }}
            </h1>
            <h2 class="subtitle">
              {{ blok.text }}
            </h2>
          </div>
          <div class="column has-text-right">
            <bubble v-for="bubble in blok.bubbles" :blok="bubble" :key="bubble._uuid" class="spaced-h-3"></bubble>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['blok']
}
</script>
