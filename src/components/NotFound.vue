<script setup>
import PrimaryButton from "@/components/PrimaryButton.vue";
</script>

<template>
  <div class="not-found">
    <h1 class="heading-primary">Uh-oh!</h1>
<!--    <p class="text-[20px]">You look lost on your journey!</p>-->
    <p class="text-[1.3rem]">You look lost on your journey!</p>
    <PrimaryButton href="/pokemones" :active="true" label="Go back home" @click="$emit('click')"/>
  </div>
</template>

<style scoped>

</style>