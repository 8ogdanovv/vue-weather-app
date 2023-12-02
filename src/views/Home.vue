<template>
  <div>
    <CityWeather
      v-for="(cityWeather, index) in storedData"
      :key="index"
      :cityWeather="cityWeather"
      :displayDays="1"
      :index="index"
    />

    <autocomplete-input />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import i18n from '../i18n';
import getIPInfo from '@/helpers/ipInfoHelper';
import AutocompleteInput from '@/components/AutocompleteInput.vue';
import translateToUkrainian from '@/helpers/translateHelper';
import getWeather from '@/helpers/weatherHelper';
import { extractCurrentCity, extractCity } from '@/helpers/extractCity';
import CityWeather from '@/components/CityWeather.vue';

const storedData = ref(JSON.parse(sessionStorage.getItem('home')) || [{ city: {}, weather: {} }]);

const setDefaultLanguageAndWeather = async () => {
  if (!sessionStorage.getItem('home')) {
    try {
      const ipInfo = await getIPInfo();
      if (ipInfo) {
        const currentCity = extractCurrentCity(ipInfo);
        sessionStorage.setItem(
          'home',
          JSON.stringify([{ city: currentCity, weather: await getWeather(currentCity.latitude, currentCity.longitude) }])
        );
        i18n.global.messages['en'].cityNames = currentCity.name;
        i18n.global.messages['uk'].cityNames = await translateToUkrainian(currentCity.name);
      }
    } catch (error) {
      console.error('Error setting default language and weather:', error);
    }
  } else {
    const home = JSON.parse(sessionStorage.getItem('home'));
    const cityNamesEn = home.map(item => item.city.name).join('_');
    const cityNamesUkPromises = home.map(async (item) => await translateToUkrainian(item.city.name));
    const cityNamesUk = await Promise.all(cityNamesUkPromises);
    i18n.global.messages['en'].cityNames = cityNamesEn;
    i18n.global.messages['uk'].cityNames = cityNamesUk.join('_');
  }
};

onMounted(() => {
  setDefaultLanguageAndWeather();
});
</script>

<style lang="scss">
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 1rem;
}

.city-weather {
  /* Add any styles for city weather display */
}

.add-city {
  &-button {
    height: 4rem;
    width: 4rem;
    font-size: 3rem;
  }
}
</style>
