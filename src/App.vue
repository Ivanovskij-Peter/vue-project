<template>
  <div class="container-center">
    <custom-header/>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import customHeader from "@/components/CustomHeader.vue";

export default {
  components: {customHeader}

}
</script>

<style  scoped>
.container-center {
  background-color: var(--background-color-primary);
  padding: 20px;
  box-sizing: border-box;
}
</style>