<template>
 <button class="btn">
<slot/>
 </button>
</template>

<script>
export default {
name:'my-custom-button'
}
</script>

<style scoped>
.btn{
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  border: 1px solid darkslategray;
  color: teal;
}
</style>