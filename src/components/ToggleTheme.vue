<template>
  <button @click="toggleTheme" class="theme-toggler" :title="$t('toggleThemeTip')">{{ themeIcon }}</button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// Define a reactive variable for the theme
const theme = ref('light')
// Define a reactive variable for the themeIcon
const themeIcon = ref('')

// Function to toggle the theme
const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light'
  themeIcon.value = newTheme === 'light' ? '🌚' : '🌞'
  theme.value = newTheme
  localStorage.setItem('theme', newTheme)
}

// Watch for changes in the theme and update CSS custom properties accordingly
watch(theme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
})

// Use the onMounted hook to perform actions after the component is mounted
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  theme.value = savedTheme
  document.documentElement.setAttribute('data-theme', savedTheme)
  themeIcon.value = savedTheme === 'light' ? '🌚' : '🌞'
})

</script>

<style>
/* Styles for dark mode */
[data-theme="dark"] {
  --background: #000;
  --gray: #ccc;
  --color: #fff;
  --shadow: #fff8;
}

/* Styles for light mode */
[data-theme="light"] {
  --background: #fff;
  --gray: #222;
  --color: #000;
  --shadow: #0008;
}

.theme-toggler {
  background-color: transparent;
  border: none;
  padding: 1rem;
  font-size: 4rem;
}
</style>
