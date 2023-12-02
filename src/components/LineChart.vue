<template>
  <div class="chart">
    <Line :data="data" :options="options" />
  </div>
</template>

<style lang="scss">
.chart {
  width: 100%;
}
</style>

<script setup>
import { ref, defineProps, computed } from 'vue'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const { weather, displayDays  } = defineProps(['weather', 'displayDays'])

const hours = weather.hourly.time.slice(0, 24).map(h => h.slice(-5))
const hourlyLabel = displayDays === 1 ? 'Hourly temperature' : `Avarage temperature for each day of ${displayDays}`

const temperatures = weather.hourly.temperature_2m.slice(0, 24)

const data = ref({
  labels: hours,
  datasets: [
    {
      label: hourlyLabel,
      backgroundColor: '#ff00ff',
      data: temperatures
    }
  ]
})

const options = ref({
  responsive: true,
  maintainAspectRatio: false
})
</script>