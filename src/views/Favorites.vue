<template>
  <div v-if="isLoaded === true">
    <div v-if="favorites.length">
      <CityWeather
        v-for="(cityWeather, index) in favorites"
        :key="index"
        :cityWeather="cityWeather"
        :displayDays="7"
        :index="index"
      />
    </div>
    <div v-else>
      <h2>There is no pinned cities...</h2>
      <router-link to="/">Go to the main page</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import i18n from '../i18n';
import CityWeather from '@/components/CityWeather.vue';
import getWeather from '@/helpers/weatherHelper';
import translateToUkrainian from '@/helpers/translateHelper';

const favorites = ref(JSON.parse(localStorage.getItem('favorites')) || []);

const isLoaded = ref(false);

const setWeatherAndLoad = async () => {
  isLoaded.value = false;

  if (localStorage.getItem('favorites')) {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites'));
    const cityNamesEn = storedFavorites.map((item) => item.city.name);
    const cityNamesUkPromises = storedFavorites.map(async (item) => await translateToUkrainian(item.city.name));
    const cityNamesUk = await Promise.all(cityNamesUkPromises);
    i18n.global.messages['en'].cityNamesPinned = cityNamesEn.join('_');
    i18n.global.messages['uk'].cityNamesPinned = cityNamesUk.join('_');

    // Update weather for cities with outdated data
    const currentDate = new Date().toISOString().slice(0, 10);
    const updatedFavorites = storedFavorites.map(async (item) => {
      if (item.weather.current && item.weather.current.time.slice(0, 10) !== currentDate) {
        const newWeatherData = await getWeather(item.city.name);
        item.weather = newWeatherData;
      }
      return item;
    });

    // Update localStorage with the new weather data
    localStorage.setItem('favorites', JSON.stringify(await Promise.all(updatedFavorites)));
  }

  favorites.value = JSON.parse(localStorage.getItem('favorites')) || [];
  isLoaded.value = true;
};

onMounted(() => {
  setWeatherAndLoad();
});

watch(JSON.parse(localStorage.getItem('favorites')), () => window.location.reload());
</script>
