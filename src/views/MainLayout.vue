<script setup>
import SearchBar from "@/components/SearchBar.vue";
</script>

<template >
  <div class="main-layout">
    <SearchBar />
    <slot></slot>
  </div>
</template>
