<script setup>
import PrimaryButton from "@/components/PrimaryButton.vue";
</script>

<template>
  <div class="welcome">
    <img src="/Pikachu.png" alt="Pikachu" width="300">
    <span class="heading-secondary ">Welcome to Pokédex</span>
    <span>The digital encyclopedia created by Professor Oak is an invaluable tool to Trainers in the
      Pokémon world.</span>
    <PrimaryButton href="/pokemones" :active=true icon="" label="Get Started" />
  </div>
</template>
