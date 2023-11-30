<template>
  <footer class="footer flex-center-between">
    <section class="links">
      <a href="https://vitejs.dev/" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </section>
    <p class="authority flex-center-center">
      <span class="name">© 2023 {{$t('author')}}</span>
      <a href="https://github.com/vadym4che/" target="_blank">
        <img :src="githubImg" class="logo git" alt="GitHub logo"/>
      </a>
      <span class="abc">(č) vadym4che</span>
    </p>
    <toggle-theme />
  </footer>
</template>

<script setup>
import ToggleTheme from './ToggleTheme.vue'
import { ref, computed, onMounted } from 'vue'

// Define a reactive variable to track the current theme
const isLightTheme = ref(true)

// Get proper gray or white github logo depending on global color scheme
const githubImg = computed(() => isLightTheme.value ? './gh.svg' : './gh-white.svg')

// Use the onMounted hook to set the theme based on local storage
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isLightTheme.value = savedTheme === 'light'
  }
})
</script>

<style lang="scss">

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(315deg, var(--gray) 5%, transparent 66%, var(--grey) 100%);
  box-shadow: 0 0 1.5rem 0.25rem var(--shadow);
  padding: 0 2rem;
}

/* Styles for the logos */
.logo {
  height: 6rem;
  padding: 1rem;
  will-change: filter;
  transition: filter 300ms;
  position: relative;
  z-index: 5;
}

/* Hover effect for Vite logo */
.logo.vite:hover {
  filter: drop-shadow(0 0 2em #646cffcc);
}

/* Hover effect for Vue logo */
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883cc);
}

/* Hover effect for GitHub logo */
.logo.git:hover {
  filter: drop-shadow(0 0 2em #888888cc); /* Adjust color as needed */
}

.authority {
  color: var(--gray);
  display: flex;
  position: absolute;
  width: 60dvw;
  left: 20dvw;
}

.name {
  text-align: right;
}

.name,
.abc {
  display: block;
  width: 25dvw;
}

.abc {
  text-align: left;
}

</style>
