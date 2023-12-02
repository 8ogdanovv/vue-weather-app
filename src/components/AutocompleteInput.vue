<template>
  <div class="add-city flex-center-center">
    <GoogleAutocomplete
      :api-key="API_KEY"
      @set="setCityToAdd"
      :placeholder="$t('autocomplete')"
    />
    <button class="add-city-button" @click="handleAddLocation">+</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { GoogleAutocomplete } from 'vue3-google-autocomplete';
import { extractCity } from '@/helpers/extractCity';
import getWeather from '@/helpers/weatherHelper';

const API_KEY = computed(() => import.meta.env.VITE_GMAPS_API_KEY);
const cityToAdd = ref();

const setCityToAdd = (location) => {
  console.log('Received payload:', location);

  cityToAdd.value = extractCity(location);
};

const handleAddLocation = async () => {
  const weatherToAdd = await getWeather(cityToAdd.value.latitude, cityToAdd.value.longitude);

  // Use spread operator to create a new array with the added item
  sessionStorage.setItem(
    'home',
    JSON.stringify([...JSON.parse(sessionStorage.getItem('home')), { city: cityToAdd.value, weather: weatherToAdd }])
  );

  // Clear the location after adding
  document.querySelector('.pac-target-input').value = ''
  window.location.reload()
};
</script>

<style lang="scss">
.pac-target-input {
  display: block;
  height: 4rem !important;
  width: 100%;
}
</style>