<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1 class="msg">
    {{ msg }}
  </h1>
</template>

<style scoped lang="scss">
.msg {
  color: red;
}
</style>
