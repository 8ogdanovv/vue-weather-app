<template>
  <div>
    <CityWeather
      v-for="(cityWeather, index) in favorites"
      :key="index"
      :cityWeather="cityWeather"
      :displayDays="7"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CityWeather from '@/components/CityWeather.vue';

const favorites = ref(JSON.parse(localStorage.getItem('favorites')) || []);

// Function to remove a favorite
const removeFavorite = (index) => {
  favorites.value.splice(index, 1);
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};
</script>