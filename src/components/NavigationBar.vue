<template>
  <nav class="flex-center-center">
    <router-link to="/">Home</router-link>
    <router-link to="/favorites">Favorites</router-link>
  </nav>
</template>

<script setup>

</script>

<style lang="scss">
nav {
  gap: 1rem;

  a {
    text-decoration: none;
    color: var(--color);

    &.router-link-active {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}

</style>