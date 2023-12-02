<template>
    <div class="card">
      <p>
        {{ $t('city') }}: {{ $t('cityNames').split('_')[index] }} ||
        {{ $t('temperature') }}:&nbsp;
        <span class="city-weather">
          {{ cityWeather.weather.current.temperature_2m }}
          {{ cityWeather.weather.current_units.temperature_2m }}
        </span>
      </p>
      <line-chart :weather="cityWeather.weather" :displayDays="displayDays"/>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';
import LineChart from './LineChart.vue';

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
  padding: 1rem;
  margin-top: 1rem;
  width: 68dvw;

  border-radius: 0.5rem;
  background: linear-gradient(160deg, transparent, var(--grey), var(--background));
  box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);
}

.city-weather {
  /* Add any styles for city weather display */
}
</style>