<template>
  <input type="text" class="input" :value="modelValue" @input="updateInput"/>
</template>

<script>
export default {
  name:'my-custom-input',
  props:{
    modelValue:[String,Number]
  },
  methods:{
    updateInput(event){
      this.$emit('update:modelValue',event.target.value)
    }
  }
}
</script>

<style scoped>
.input{
  padding: 5px;
  margin-bottom: 10px;
}
</style>