<template>
  <div class="days-to-display">
    <button
      :class="{ active: days == less }"
      @click="setDays(less)"
      :title="$t('chartHourlyTip')"
    >
      {{$t('daysButtonHourly')}}
    </button>
    <button
      :class="{ active: days == more }"
      @click="setDays(more)"
      :title="$t('chartDailyTip').replace('__', more)"
    >
      {{ more + ' ' + $t('daysButtonDaily') }}
    </button>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, watch } from 'vue'

const { less, more, storageKey } = defineProps(['less', 'more', 'storageKey'])
const days = ref(sessionStorage.getItem(storageKey) || 1)

const setDays = (value) => {
  if (value == sessionStorage.getItem(storageKey)) return
  days.value = value
}

onMounted(() => sessionStorage.setItem(storageKey, days.value))

watch(days, (newValue) => {
  sessionStorage.setItem(storageKey, newValue)
  window.location.reload()
})
</script>

<style lang="scss">
.days-to-display {
  position: absolute;
  display: flex;
  flex-direction: column;

  button {
    border: none;
    cursor: pointer;
    font-size: 2rem;
    background: linear-gradient(160deg, transparent, var(--grey), var(--background));
    box-shadow: inset 0 0 0.5rem 0.25rem var(--shadow);
    color: var(--background);

    padding: 1rem;

    &:hover {

    }

    &.active {
      background-color: var(--grey);
      box-shadow: inset 0 0 0.75rem 0.5rem var(--shadow);
      color: var(--color);
    }
  }

  button:first-of-type {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  button:last-of-type {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
}

@media (orientation: landscape) {
  .days-to-display {
    top: 45.5%;
    right: 5rem;
  }
}

@media (orientation: portrait) {
  .days-to-display {
    top: 46.75%;
    right: 3rem;
  }
}
</style>