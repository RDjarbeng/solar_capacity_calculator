<script setup lang="ts">
import { ref, computed } from 'vue'

const solarVoltage = ref(6)
const solarPower = ref(0.3)
const batteryCapacity = ref(4800)
const numBatteries = ref(2)

const chargingCurrent = computed(() => {
  return (solarPower.value / solarVoltage.value) * 1000 // Convert to mA
})

const totalCapacity = computed(() => {
  return batteryCapacity.value * numBatteries.value
})

const chargingTime = computed(() => {
  return totalCapacity.value / chargingCurrent.value
})
</script>

<template>
  <div class="p-4 max-w-xl mx-auto bg-white/10 rounded-lg">
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium">Solar Panel Voltage (V)</label>
          <input 
            type="number"
            v-model="solarVoltage"
            class="mt-1 block w-full rounded border-gray-300 bg-white/20 px-2 py-1"
          />
        </div>
        <div>
          <label class="block text-sm font-medium">Solar Panel Power (W)</label>
          <input 
            type="number"
            v-model="solarPower"
            class="mt-1 block w-full rounded border-gray-300 bg-white/20 px-2 py-1"
          />
        </div>
        <div>
          <label class="block text-sm font-medium">Battery Capacity (mAh)</label>
          <input 
            type="number"
            v-model="batteryCapacity"
            class="mt-1 block w-full rounded border-gray-300 bg-white/20 px-2 py-1"
          />
        </div>
        <div>
          <label class="block text-sm font-medium">Number of Batteries</label>
          <input 
            type="number"
            v-model="numBatteries"
            class="mt-1 block w-full rounded border-gray-300 bg-white/20 px-2 py-1"
          />
        </div>
      </div>

      <div class="mt-6 p-4 bg-white/5 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">Results:</h3>
        <div class="space-y-2">
          <p>Charging Current: {{ chargingCurrent.toFixed(2) }} mA</p>
          <p>Total Battery Capacity: {{ totalCapacity }} mAh</p>
          <p>Estimated Charging Time: {{ chargingTime.toFixed(1) }} hours ({{ (chargingTime / 24).toFixed(1) }} days)</p>
        </div>
      </div>
    </div>
  </div>
</template>