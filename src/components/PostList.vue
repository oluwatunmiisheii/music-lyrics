<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <single-post :post="post" />
    </div>
  </div>
</template>


<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost'
export default {
  name: 'PostList',
  components: {
    SinglePost
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  setup() {
    onMounted(() => {
      console.log('PostList mounted')
    })

    onUnmounted(() => {
      console.log('PostList unmounted')
    })

    onUpdated (() => {
      console.log('PostList unUpdated')
    })
  },
}
</script>