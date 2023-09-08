<template>
  <div class="form_container">
    <form @submit.prevent class="form">
      <my-custom-input
          v-focus
          v-model="post.title"
          placeholder="title"
      />
      <my-custom-input
          v-model="post.body"
          placeholder="description"
      />
      <my-custom-button @click="createPost">Create</my-custom-button>
    </form>

  </div>
</template>

<script>

export default {
  data() {
    return {
      post:{
        title:'',
        body:'',
}
    }
  },
  methods:{
    createPost(){
        this.post.id=Date.now();
        this.$emit('create',this.post)
        this.post={
          title: '',
          body: '',
         }
    }
  }

}
</script>

<style  scoped>
.form{
  display: flex;
  flex-direction: column;
}
.form_container{
  display: flex;
  justify-content: center;
}
</style>