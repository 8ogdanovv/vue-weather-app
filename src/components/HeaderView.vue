<template>
  <header class="header flex-center-between">
    <toggle-lang />
  </header>
</template>

<script setup>
import ToggleLang from '@/components/ToggleLang.vue'
</script>

<style lang="scss">
.header {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100dvw;
  background: linear-gradient(180deg, var(--shadow) 10%, transparent 68%, var(--grey));
  box-shadow: 0 0 2.5rem 0.5rem var(--shadow);
  background: linear-gradient(135deg, var(--shadow) 5%, transparent 60%, var(--grey) 100%);
  box-shadow: 0 0 1.5rem 0.25rem var(--shadow);
  height: 10rem;
  padding: 1rem;
  filter: blur(1px);
}
</style>