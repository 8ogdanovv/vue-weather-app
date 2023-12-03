<template>
  <div class="city-weather">
    <div class="head flex-center-between">
      <h3>
        {{ $t('city') }}: {{ props.home ? $t('cityNames').split('_')[index] : $t('cityNamesPinned').split('_')[index] }} |
        {{ $t('temperature') }}:&nbsp;
        {{ cityWeather.weather.current.temperature_2m }}
        {{ cityWeather.weather.current_units.temperature_2m }}
      </h3>
      <div v-if="props.home" class="controls flex-center-end">
        <button
          class="city-weather-remove-city"
          :title="$t('removeCityTip')"
          @click="handleRemoveCity"
        >
          <span class="remove">❌</span>
        </button>
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
      <div v-else>
        <button
          class="city-weather-unpin-city"
          :title="$t('cityUnpinTip')"
          @click="toggleShowUnpinWarning"
        >
          <span class="unpin">📌</span>
        </button>
      </div>
    </div>
    <line-chart :weather="cityWeather.weather" :displayDays="displayDays" />

    <warning-error
      v-if="showUnpinWarning"
      type="warning"
      :message="unpinWarningMessage"
      :handler="handleUnpinCity"
      :state="showUnpinWarning"
      :closer="toggleShowUnpinWarning"
    />

    <warning-error
      v-if="showMaxPinnedError"
      type="error"
      :message="maxPinnedErrorMessage"
      :state="showMaxPinnedError"
      :closer="toggleShowMaxPinnedError"
      :suggestRedirect="true"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import LineChart from './LineChart.vue';
import router from '@/router'
import WarningError from './WarningError.vue'

const props = defineProps(['cityWeather', 'displayDays', 'index', 'home']);
const index = ref(props.index);
const cityWeather = ref(props.cityWeather);
const displayDays = ref(props.displayDays || 1);

const showUnpinWarning = ref(false)
const toggleShowUnpinWarning = () => showUnpinWarning.value = !showUnpinWarning.value
const unpinWarningMessage = "Are you sure you want to unpin this city?"
const showMaxPinnedError = ref(false)
const toggleShowMaxPinnedError = () => showMaxPinnedError.value = !showMaxPinnedError.value
const maxPinnedErrorMessage = "You have reached the maximum number of pinned cities (5)."

const isCityInFavorites = ref(
  JSON.parse(localStorage.getItem('favorites'))?.some((fav) => fav.city.name === cityWeather.value.city.name) || false
);

const handlePinCity = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []

  if (favorites.length === 5) {
    toggleShowMaxPinnedError()
  }

  if (!isCityInFavorites.value) {
    favorites.push({ city: cityWeather.value.city, weather: cityWeather.value.weather })
    localStorage.setItem('favorites', JSON.stringify(favorites))
    isCityInFavorites.value = true
  }
}

const handleUnpinCity = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || []
  const updatedFavorites = favorites.filter((fav) => fav.city.name !== cityWeather.value.city.name)
  localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  isCityInFavorites.value = false
  toggleShowUnpinWarning()
  window.location.reload()
};

const handleRemoveCity = () => {
  const cities = JSON.parse(sessionStorage.getItem('home')) || []
  const updatedCities = cities.filter((itemToDelete) => itemToDelete.city.name !== cityWeather.value.city.name)
  sessionStorage.setItem('home', JSON.stringify(updatedCities))
  // toggleShowUnpinWarning()
  window.location.reload()
};

watch(JSON.parse(localStorage.getItem('favorites')), () => window.location.reload());
</script>

<style lang="scss">
@keyframes pin {
  0% {}
  50% {
    transform: translate(-20%, 20%) scale(0.9);
    filter: sepia(0);
  }
  100% {}
}

@keyframes unpin {
  0% {}
  50% {
    transform: translate(20%, -20%) scale(1.2);
    filter: sepia();
  }
  100% {}
}

@keyframes remove {
  0% {}
  50% {
    transform: scale(0.75);
    filter: sepia();
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
  position: relative;

  border-radius: 0.5rem;
  background: linear-gradient(160deg, transparent, var(--grey), var(--background));
  box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);

  .controls {
    gap: 0.5rem;
  }

  &-pin-city,
  &-unpin-city,
  &-remove-city {
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 1.75rem;
    line-height: 100%;
    background: linear-gradient(160deg, transparent, var(--grey), var(--background));
    box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);

    .pin,
    .unpin,
    .remove {
      position: relative;
      padding: 1rem;
    }

    .pin {
      filter: sepia();
      &:hover {
        animation: pin 1.5s;
      }
    }

    .unpin {
      &:hover {
        animation: unpin 1.5s;
      }
    }

    .remove {
      &:hover {
        animation: remove 1.5s;
      }
    }
  }
}
</style>