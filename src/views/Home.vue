<template>
  <div>
    <autocomplete-input @location-selected="handleLocationSelected" />

    <div v-if="ipInfo.city">
      <div class="card">
        <p>{{ $t('city') }}: {{ $t('currentCityName') }}</p>
        <p>{{ $t('temperature')}}:&nbsp;
          <span v-if="loaded.value === true">
            {{ weatherInfo.value.current.temperature_2m }}
            {{ weatherInfo.value.current_units.temperature_2m }}
          </span>
          <span v-else>
            {{ $t('loading') }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import i18n from '../i18n'
import getIPInfo from '@/helpers/ipInfoHelper'
import AutocompleteInput from '@/components/AutocompleteInput.vue'
import translateToUkrainian from '@/helpers/translateHelper'
import getWeather from '@/helpers/weatherHelper'

const ipInfo = ref({})
const weatherInfo = ref({})
const loaded = ref(false)

const setDefaultLanguageAndWeather = async () => {
  try {
    // Get IP info
    ipInfo.value = await getIPInfo();
    console.log(ipInfo)

    if (ipInfo.value) {
      // Set default language based on location or any other logic
      const defaultLang = ipInfo.value.country.iso_code === 'UA' ? 'uk' : 'en';
      i18n.global.locale = defaultLang;

      // Store the information for future use
      localStorage.setItem('ipInfo', JSON.stringify(ipInfo.value));
      localStorage.setItem('lang', defaultLang);

      i18n.global.messages['en'].currentCityName = ipInfo.value.city.names.en
      i18n.global.messages['uk'].currentCityName = await translateToUkrainian(ipInfo.value.city.names.en)

      // Fetch weather information for the nearest city (use your preferred weather API)
      weatherInfo.value = await getWeather(ipInfo.value.location)
      console.log('Weather for the nearest city:', weatherInfo.value)
    }
  } catch (error) {
    console.error('Error setting default language and weather:', error);
  }
};

const handleLocationSelected = (location) => {
  // Handle the selected location data (e.g., save it to a variable or perform other actions)
  console.log('Selected Location:', location);
}

onMounted(() => {
  setDefaultLanguageAndWeather();

  loaded.value = !loaded.value
});

</script>

<style lang="scss">
.card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 1rem;
}
</style>
