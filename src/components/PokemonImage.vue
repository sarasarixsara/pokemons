<script setup>
defineProps({pokemon: Object})
defineEmits(['close'])
</script>

<template>
  <div class="pokemon-image-container">
    <img src="/close.svg" alt="Close"
         role="button"
         tabindex="0" class="dialog-close-button" @click="$emit('close')">
    <img :src="pokemon.image" alt="pokemon-image" class="h-full mx-auto">
  </div>
</template>
