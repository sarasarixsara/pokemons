<script setup>
defineProps({
  pokemon: {
    type: Object,
    required: true
  }
});
</script>

<template>
    <div v-for="([key, value], index) in Object.entries(pokemon).filter(([k]) => k !== 'image')" :key="index"
         class="pokemon-info-table">
      <span class="font-semibold">{{ key }}: </span>
      <span>
        <template v-if="Array.isArray(value)">
          {{ value.join(', ') }}
        </template>
        <template v-else>
          {{ value }}
        </template>
      </span>
    </div>
</template>
