<template>
  <div>
    <div v-for="(option, index) in languageOptions" :key="index">
      <div @click="setLanguage(option.value)" :class="{ selected: selectedLanguage === option.value }">
        <img :src="option.image" alt="Flag" class="flag-icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const { languageOptions, selectedLanguage, setLanguage } = defineProps(['languageOptions', 'selectedLanguage', 'setLanguage']);

</script>

<style scoped>
.flag-icon {
  width: 20px; /* Adjust the width based on your design */
  height: 20px; /* Adjust the height based on your design */
  margin-right: 8px; /* Adjust the margin based on your design */
}

.selected {
  /* Add styles for the selected option if needed */
  font-weight: bold;
}
</style>
