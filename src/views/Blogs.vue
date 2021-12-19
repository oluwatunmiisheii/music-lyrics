<template>
  <div class="blogs">
    <h1>Blog Posts</h1>
    <post-lists v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">Toggle Posts</button>
    <button @click="posts.pop()">Delete Post</button>
  </div>
</template>


<script>
import { ref }  from 'vue'
import PostLists from '@/components/PostList'
export default {
  name: 'Blogs',
  components: {
    PostLists
  },
  setup() {
    const showPosts = ref(true)

    const posts = ref([
      {
        id: 1,
        title: 'Post 1',
        body: 'This is the first post'
      },
      {
        id: 2,
        title: 'Post 2',
        body: 'This is the second post'
      }
    ])

    return {
      posts,
      showPosts
    }
  },
}
</script>