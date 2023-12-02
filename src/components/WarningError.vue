<template>
  <div class="warning-error" v-show="props.state">
    <div v-if="props.type === 'err'">
      Error: {{ props.message }}
    </div>
    <div v-else>
      Error: {{ props.massage }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
const props = defineProps(['type', 'message', 'handler', 'state'])

onMounted(() => {
  if (props.type === 'err') {
    setTimeout(() => props.handler(), 2000)
  }
})
</script>

<style lang="scss">

</style>