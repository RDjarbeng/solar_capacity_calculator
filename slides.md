---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: 'text-center'
highlighter: shiki
lineNumbers: true
info: |
  ## Solar Panel Calculator
  Interactive calculator for solar panel charging calculations.
drawings:
  persist: false
css: unocss
---

# Solar Panel Calculator

Interactive calculator for battery charging calculations

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

---
layout: center
---

# Solar Panel Charging Calculator

<SolarCalculator />

---
layout: two-cols
---

# Formula Breakdown

- Power (W) = Voltage (V) × Current (A)
- Charging Time (hours) = Battery Capacity (mAh) / Charging Current (mA)

::right::

# Key Considerations

- Solar panel efficiency
- Battery configuration (series/parallel)
- Real-world factors:
  - Sunlight availability
  - Temperature effects
  - Charging efficiency losses

---
layout: center
class: text-center
---

# Example Case Study

Using a 6V, 0.3W solar panel to charge two 18650 batteries (4800mAh each):

<SolarExample />