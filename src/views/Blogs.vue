<template>
  <div class="blogs">
    <h1>Blog Posts</h1>
    <div v-if="loading">Loading Posts</div>
    <div v-if="error">{{ error }}</div>
    <template v-if="posts.length > 0">
      <post-lists v-if="showPosts" :posts="posts" />
      <button @click="showPosts = !showPosts">Toggle Posts</button>
      <button @click="posts.pop()">Delete Post</button>
    </template>
  </div>
</template>


<script>
import { ref }  from 'vue'
import useGetPosts from '../composibles/useGetPosts'
import PostLists from '@/components/PostList'
export default {
  name: 'Blogs',
  components: {
    PostLists
  },
  setup() {
    const showPosts = ref(true)
    const { loading, error, posts, load } = useGetPosts();

    load()

    return {
      posts,
      showPosts,
      error,
      loading
    }
  },
}
</script>