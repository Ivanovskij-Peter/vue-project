<template>
  <div class="group relative">
    <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
      {{ post.title }}
    </h3>
    <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{{ post.body }}</p>
    <div >
      <my-custom-button @click="$router.push(`/posts/${post.id}`)">Open</my-custom-button>
      <my-custom-button @click="$emit('remove',post)">Delete</my-custom-button>
    </div>
  </div>
</template>

<script>


export default {
props:{
  post:{
    type:Object,
    required:true,
  }
}
}
</script>

<style  scoped>
p {
  color: var(--text-primary-color);
}
h3 {
  color: var(--text-primary-color);
}
</style>