<template>
  <div class="city-weather">
    <div class="head flex-center-between">
      <h3>
        {{ $t('city') }}: {{ $t('cityNames').split('_')[index] }} |
        {{ $t('temperature') }}:&nbsp;
        {{ cityWeather.weather.current.temperature_2m }}
        {{ cityWeather.weather.current_units.temperature_2m }}
      </h3>
      <div v-if="props.home">
        <button
          class="city-weather-pin-city"
          :class="{ disabled: isCityInFavorites }"
          :title="isCityInFavorites ? $t('alreadyPinnedTip') : $t('pinCityTip')"
          @click="handlePinCity"
          :disabled="isCityInFavorites"
        >
          <span class="pin" :class="{ 'no-animation': isCityInFavorites }">📌</span>
        </button>
      </div>
    </div>
    <line-chart :weather="cityWeather.weather" :displayDays="displayDays" />
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import LineChart from './LineChart.vue';

const props = defineProps(['cityWeather', 'displayDays', 'index', 'home']);
const index = ref(props.index);
const cityWeather = ref(props.cityWeather);
const displayDays = ref(props.displayDays || 1);

const isCityInFavorites = ref(JSON.parse(localStorage.getItem('favorites')).some((fav) => fav.city.name === cityWeather.value.city.name));

const handlePinCity = () => {
  if (!isCityInFavorites.value) {
    // Add city to favorites in local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push({ city: cityWeather.value.city, weather: cityWeather.value.weather });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Update the state to reflect the change
    isCityInFavorites.value = true;
  }
}
</script>

<style lang="scss">
@keyframes pin {
  0% {}
  50% {
    transform: translate(20%, -20%) scale(1.2);
  }
  100% {}
}

.no-animation {
  animation: none !important;
}

.city-weather {
  padding: 1rem;
  margin-top: 1rem;
  width: 68dvw;

  border-radius: 0.5rem;
  background: linear-gradient(160deg, transparent, var(--grey), var(--background));
  box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);

  &-pin-city {
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 1.5rem;
    background: linear-gradient(160deg, transparent, var(--grey), var(--background));
    box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);

    .pin {
      position: relative;
      padding: 1rem;

      &:hover {
        animation: pin 1s;
      }
    }
  }
}
</style>