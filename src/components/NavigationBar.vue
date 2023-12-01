<template>
  <nav class="flex-center-center">
    <router-link to="/">{{$t('weather')}}📈</router-link>
    <router-link to="/favorites">{{$t('cities')}}📌</router-link>
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