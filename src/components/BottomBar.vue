<script setup>
import PrimaryButton from "@/components/PrimaryButton.vue";
import { useRoute } from 'vue-router'
const route = useRoute()

const buttons = [
  { href: '/pokemones', icon: '/icons/list.svg', label: 'All' },
  { href: '/favorites', icon: '/icons/star.svg', label: 'Favorites' }
]
</script>

<template>
  <div class="bottom-bar">
    <div class="bottom-bar-buttons">
      <PrimaryButton
          v-for="btn in buttons"
          :key="btn.href"
          :href="btn.href"
          :icon="btn.icon"
          :label="btn.label"
          :active="route.path === btn.href"
          class="w-full"
      />
    </div>
  </div>
</template>
