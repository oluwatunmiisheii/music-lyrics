<template>
  <h4>{{post.title}}</h4>
  <p>{{ snippet }}</p>
</template>

<script>
import { computed } from '@vue/reactivity'
export default {
  name: 'SinglePost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.slice(0, 10) + '...'
    })

    return {
      snippet
    }
  }

}
</script>

<style>

</style>