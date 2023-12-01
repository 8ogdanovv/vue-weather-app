<template>
  <GoogleAutocomplete
    v-model="value"
    :api-key="API_KEY"
    @set="getPayload"
    :placeholder="$t('autocomplete')"
  />
</template>

<script setup>
import { ref, computed, defineEmits } from 'vue'
import { GoogleAutocomplete } from 'vue3-google-autocomplete'

const value = ref()
const API_KEY = computed(() => import.meta.env.VITE_GMAPS_API_KEY)
const emits = defineEmits(['location-selected']);

const getPayload = (payload) => {
  console.log('Received payload:', payload)
  emits['location-selected'](payload);
};
</script>