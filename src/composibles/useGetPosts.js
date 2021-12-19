import { ref }  from 'vue'

const useGetPosts = () => {
  const posts = ref([])
  const error = ref(null);
  const loading = ref(true);

  const load = async () => {
    try {
      const data = await fetch('http://localhost:3000/posts');
      if(!data.ok) {
        throw new Error('Could not fetch posts');
      }
      const jsonData = await data.json();
      posts.value = jsonData;
    } catch (loadPostError) {
      error.value = loadPostError.message
      console.log(loadPostError.message);
    } finally {
      loading.value = false;
    }
  }

  return {
    load,
    posts,
    error,
    loading
  }
}

export default useGetPosts;