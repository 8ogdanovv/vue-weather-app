<template>
  <header class="header flex-center-between">
    <toggle-lang />
  </header>
</template>

<script setup>
import ToggleLang from '@/components/ToggleLang.vue';
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 2.5rem 0.5rem var(--shadow);
  height: 6rem;
}
</style>