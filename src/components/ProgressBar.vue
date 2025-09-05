<script setup>
const props = defineProps({
  label: String,
  value: Number, // 0..100
});
</script>

<template>
  <div class="vstack" style="gap:8px">
    <div class="hstack" style="justify-content:space-between">
      <span>{{ label }}</span>
      <span class="small mono">{{ value }}%</span>
    </div>
    <div class="progress-line" role="progressbar" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100">
      <span :style="{ width: value + '%' }"></span>
    </div>
  </div>
</template>
