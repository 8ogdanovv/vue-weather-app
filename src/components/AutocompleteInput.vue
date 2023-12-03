<template>
  <div class="add-city flex-center-center">
    <GoogleAutocomplete
      :api-key="API_KEY"
      @set="setCityToAdd"
      :placeholder="'🔍' + $t('autocomplete')"
    />
    <button class="add-city-button" @click="handleAddLocation">+</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { GoogleAutocomplete } from 'vue3-google-autocomplete'
import { extractCity } from '@/helpers/extractCity'
import getWeather from '@/helpers/weatherHelper'

const API_KEY = computed(() => import.meta.env.VITE_GMAPS_API_KEY)
const cityToAdd = ref()

const setCityToAdd = (location) => {
  console.log('Received payload:', location)
  cityToAdd.value = extractCity(location)
}

const handleAddLocation = async () => {
  const weatherToAdd = await getWeather(cityToAdd.value.latitude, cityToAdd.value.longitude)
  sessionStorage.setItem(
    'home',
    JSON.stringify([...JSON.parse(sessionStorage.getItem('home')), { city: cityToAdd.value, weather: weatherToAdd }])
  )
  document.querySelector('.pac-target-input').value = ''
  window.location.reload()
}
</script>

<style lang="scss">
.pac-target-input {
  display: block;
  height: 4rem !important;
  width: 100%;
  position: relative;
  padding: 0.25rem 0.5rem;
  font-size: 2.5rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: var(--background);
  color: var(--color);
}

.pac-target-input::placeholder {
  position: absolute;
  display: block;
  top: 0.25rem;
  left: 0.5rem;
  font-size: 2.5rem;
  width: 100%;
}

.add-city {
  margin-top: 2rem;

  &-button {
    height: 4rem;
    width: 4rem;
    font-size: 3rem;
    border: none;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: linear-gradient(160deg, transparent, var(--grey), var(--background));
    box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);
  }
}
</style>