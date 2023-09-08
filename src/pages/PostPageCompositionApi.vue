<template>
  <div >
    <div>
      <my-custom-button @click="showDialog">
        Add Post
      </my-custom-button>
      <my-select
          v-model="selectedSort"
          :options="sortedOptions"
      />
      <my-custom-input
         v-model="searchQuery"
          placeholder="Search..."
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
      />
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
    />
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import MySelect from "@/components/UI/MySelect.vue";
import {usePosts} from "@/hooks/usePosts";
import {useSortedPosts} from "@/hooks/useSortedPosts";
import {useSortedAndSearchedPosts} from "@/hooks/useSortedAndSearchedPosts";


export default {
  components:{
    MySelect,
    PostList,
    PostForm
  },

  data(){
    return{
      dialogVisible:false,
      sortedOptions:[
        {value:'title', name:'By name'},
        {value: 'body', name:'By description'}
      ],
    }
  },
  setup(){
   const {posts,totalPages,isPostsLoading}=usePosts(10);
   const {selectedSort,sortedPosts}=useSortedPosts(posts);
   const {searchQuery,sortedAndSearchedPosts}=useSortedAndSearchedPosts(sortedPosts)

    return{
     posts,
      totalPages,
      isPostsLoading,
      selectedSort,
      sortedPosts,
      searchQuery,
      sortedAndSearchedPosts
    }
  }

};
</script>

<style scoped>

.observer{
  height: 30px;
  background: green;
}
</style>