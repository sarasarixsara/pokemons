<script setup>
import {usePokemonesStore} from "@/stores/pokemones.js";

const pokemonStore = usePokemonesStore();
</script>
<template>
  <div class="search-bar">
    <img src="/icons/lens.svg" alt="">
    <input type="text" placeholder="Search" class="w-full text-[16px]" v-model="pokemonStore.search">
  </div>
</template>

<style scoped>

</style>