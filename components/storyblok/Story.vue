<template>
  <component :blok="story.content" :is="story.content.component"></component>
</template>

<script>
  export default {
    props: {
      slug: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        story: this.emptyStory()
      }
    },
    mounted () {
      this.$storyblok.init({
        accessToken: 'V369AWe91yCYIv5Pg5NG1wtt'
      })
      this.$storyblok.on('change', () => {
        this.getStory('draft')
      })
      this.$storyblok.pingEditor(() => {
        this.getStory()
      })
    },
    methods: {
      getStory () {
        return this.$storyblok.get({
          slug: this.slug,
          version: this.$storyblok.isInEditor() ? 'draft' : 'published'
        }, (data) => {
          this.story = this.emptyStory()
          this.$nextTick(() => {
            this.story = data.story
          })
        })
      },
      emptyStory () {
        return {
          content: {
            body: []
          }
        }
      }
    }
  }
</script>
