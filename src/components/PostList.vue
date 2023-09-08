<template>
  <div class="colour" v-if="posts.length>0" >
      <div class="mx-auto max-w-2xl lg:mx-0" >
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Posts list</h2>
      </div>
      <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <transition-group name="post-list">
          <article v-for="post in posts" :key="post.id" class="flex max-w-xl flex-col items-start justify-between">
            <post-item :post="post" @remove="$emit('remove',post)"/>
          </article>
        </transition-group>
      </div>
  </div>
  <p v-else >Posts list is empty</p>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components:{
    PostItem
  },
  props:{
    posts:{
      type:Array,
      required:true,
    }

  }

}
</script>

<style  scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.post-list-move {
  transition: transform 0.8s ease;
}
.colour{
  background-color: var(--background-color-primary);
}
h2 {
  color: var(--text-primary-color);
}
</style>