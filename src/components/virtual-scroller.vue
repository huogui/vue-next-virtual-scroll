<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="rl-virtual-scroll__wrapper">
    virtual scroller
  </div>
</template>

<style scoped lang="scss">
.msg {
  color: red;
}
</style>
