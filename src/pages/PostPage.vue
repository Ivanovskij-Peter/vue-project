<template>
  <div >
    <div>
      <my-custom-button @click="showDialog">
        Add Post
      </my-custom-button>
      <my-select
          :model-value="selectedSort"
          @update:model-value="setSelectedSort"
          :options="sortedOptions"
      />
      <my-custom-input
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          placeholder="Search..."
      />
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
          @create="createPost"
      />
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
    />
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";

import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import MySelect from "@/components/UI/MySelect.vue";


export default {
  computed:{
    ...mapState({
      posts:state => state.post.posts,
      selectedSort:state => state.post.selectedSort,
      isLoading:state => state.post.isLoading,
      sortedOptions:state => state.post.sortedOptions,
      searchQuery:state => state.post.searchQuery,
      page: state => state.post.page,
      totalPages:state => state.post.totalPages,
      limit:state => state.post.limit,
    }),
    ...mapGetters({
      sortedPosts:'post/sortedPosts',
      sortedAndSearchedPosts:'post/sortedAndSearchedPosts',
    }),
  },
  components:{
    MySelect,
    PostList,
    PostForm
  },

  data(){
    return{
      dialogVisible:false,
    }
  },
  methods:{
    ...mapActions({
      loadMorePosts:'post/loadPosts',
      fetchPosts:'post/fetchPosts',
    }),
    ...mapMutations({
      setPage:'post/setPage',
      setSearchQuery:'post/setSearchQuery',
      setSelectedSort:'post/setSelectedSort',
    }),

    createPost(post){
      this.posts.push(post)
      this.dialogVisible=false;
    },
    removePost(post){
      this.posts=this.posts.filter(p=> p.id !== post.id);
    },
    showDialog(){
      this.dialogVisible=true;
    },
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>

<style scoped>

.observer{
  height: 30px;
  background: green;
}
</style>