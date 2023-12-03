<template>
  <nav class="nav flex-center-center">
    <router-link to="/" class="nav-link">{{ $t('weather') }}📈</router-link>
    <router-link to="/favorites" class="nav-link">{{ $t('cities') }}📌</router-link>
  </nav>
</template>

<style lang="scss">
.nav {
  gap: 1rem;
  position: relative;
  z-index: 5;

  &-link {
    text-decoration: none;
    color: var(--color);
    padding: 2rem;
    border-radius: 1rem;
    font-size: 2rem;
    transition: all 1s;

    &.router-link-active {
      font-weight: bold;
      background: var(--grey);
      box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);
    }
  }
}
</style>
