<template>
  <div>
    <div class="card">
      <p>{{ $t('city') }}: {{ $t('cityNames').split('_')[index] }}</p>
      <p>{{ $t('temperature') }}:&nbsp;
        <div v-if="loading !== true" class="city-weather">
          {{ cityWeather.weather.current.temperature_2m }}
          {{ cityWeather.weather.current_units.temperature_2m }}
        </div>
        <div v-else>
          {{ $t('loading') }}
        </div>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['cityWeather', 'displayDays', 'index'])
const cityName = ref(props.index);
const cityWeather = ref(props.cityWeather);
const displayDays = ref(props.displayDays || 1);

const toggleDisplay = () => {
  displayDays.value = displayDays.value === 1 ? 7 : 1;
};
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
</style>