<template>
  <div class="dialog" v-if="show" @click ="hideDialog">
<div @click.stop class="dialog_content">
  <slot/>
</div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name:'my-dialog',
  mixins:[toggleMixin]
}
</script>

<style scoped>
.dialog{
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  position: fixed;
  display: flex;
  z-index: 9999;
}
.dialog_content{
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>