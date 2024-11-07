<script setup lang="ts">
import { computed } from 'vue'

const voltage = 6
const power = 0.3
const singleBatteryCapacity = 4800
const batteries = 2

const current = computed(() => (power / voltage) * 1000) // in mA
const totalCapacity = computed(() => singleBatteryCapacity * batteries)
const chargingTime = computed(() => totalCapacity.value / current.value)
</script>

<template>
  <div class="p-4 bg-white/10 rounded-lg max-w-md mx-auto">
    <div class="space-y-2">
      <p>Solar Panel Current: {{ current.toFixed(2) }} mA</p>
      <p>Total Battery Capacity: {{ totalCapacity }} mAh</p>
      <p class="font-bold">Charging Time: {{ chargingTime.toFixed(1) }} hours</p>
      <p class="text-sm opacity-75">(Approximately {{ (chargingTime / 24).toFixed(1) }} days)</p>
    </div>
  </div>
</template>