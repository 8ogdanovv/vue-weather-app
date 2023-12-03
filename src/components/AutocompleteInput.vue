<template>
  <div class="add-city flex-center-center">
    <GoogleAutocomplete
      :api-key="API_KEY"
      @set="setCityToAdd"
      :placeholder="'🔍' + $t('autocomplete')"
    />
    <button class="add-city-button" @click="handleAddLocation" :title="$t('addCityTip')">+</button>

    <warning-error
      v-if="showMaxListedError"
      type="error"
      :message="maxListedErrorMessage"
      :state="showMaxListedError"
      :closer="toggleShowMaxListedError"
    />
    <warning-error
      v-if="showAlreadyInListError"
      type="error"
      :message="alreadyInListErrorMessage"
      :state="showAlreadyInListError"
      :closer="toggleShowAlreadyInListError"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { GoogleAutocomplete } from 'vue3-google-autocomplete'
import { extractCity } from '@/helpers/extractCity'
import getWeather from '@/helpers/weatherHelper'
import WarningError from './WarningError.vue'

const API_KEY = computed(() => import.meta.env.VITE_GMAPS_API_KEY)
const cityToAdd = ref()

const showMaxListedError = ref(false)
const toggleShowMaxListedError = () => showMaxListedError.value = !showMaxListedError.value
const maxListedErrorMessage = "You have reached the maximum number of listed cities (5)."
const showAlreadyInListError = ref(false)
const toggleShowAlreadyInListError = () => showAlreadyInListError.value = !showAlreadyInListError.value
const alreadyInListErrorMessage = "You have already added this city to list."

const setCityToAdd = (location) => {
  console.log('Received payload:', location)
  cityToAdd.value = extractCity(location)
}

const handleAddLocation = async () => {
  const cites = JSON.parse(sessionStorage.getItem('home')) || []

  if (cites.length === 5) {
    toggleShowMaxListedError()
    document.querySelector('.pac-target-input').value = ''

    return
  }

  if (cites.some(c => c.city.name === cityToAdd.value.name)) {
    toggleShowAlreadyInListError()
    document.querySelector('.pac-target-input').value = ''

    return
  }

  const weatherToAdd = await getWeather(cityToAdd.value.latitude, cityToAdd.value.longitude)
  sessionStorage.setItem(
    'home',
    JSON.stringify([...cites, { city: cityToAdd.value, weather: weatherToAdd }])
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
  padding-top: 0.5rem !important;
  padding-left: 1rem !important;
  font-size: 2rem !important;
  line-height: 100%;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  background-color: var(--background);
  color: var(--color);
}

.pac-target-input::placeholder {
  position: absolute;
  display: block;
  top: 0.5rem;
  left: 1rem;
  font-size: 2rem;
  line-height: 100%;
  width: 100%;
}

.add-city {
  margin-top: 2rem;
  position: relative;

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