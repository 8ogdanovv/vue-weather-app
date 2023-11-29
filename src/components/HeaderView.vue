<template>
  <header class="header flex-center-between">
    <!-- <select name="lang" id="lang" class="lang">
      <option value="uk">
        <img src="../assets/Flag_of_Ukraine.png" alt="App logo">
      </option>
      <option value="en">
        <img src="../assets/Flag_of_the_United_Kingdom.png" alt="App logo">
      </option>
    </select> -->
    <toggle-lang />
  </header>
</template>

<script setup>
import ToggleLang from './ToggleLang.vue';
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 0 2.5rem 0.5rem var(--shadow);

  & img {
    height: 4em;
    padding: 2em;
  }
}

</style>