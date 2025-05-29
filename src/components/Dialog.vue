<script setup>
import PrimaryButton from "@/components/PrimaryButton.vue";
import FavoriteIcon from "@/components/FavoriteIcon.vue";
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonInfoTable from "@/components/PokemonInfoTable.vue";

const {pokemon, isFavorite} = defineProps({
  pokemon: Object,
  isFavorite: Function
})
const copyClipboard = (pokemon) => {
  const formatted =
      `📛 Name: ${pokemon.name},
📏 Height: ${pokemon.height},
⚖️ Weight: ${pokemon.weight},
🧬 Type(s): ${pokemon.types.join(', ')}`
  navigator.clipboard.writeText(formatted);
}
defineEmits(['close', 'toggle-favorite', 'click'])
</script>

<template>
  <div class="dialog-background">
    <div class="dialog">
      <PokemonImage :pokemon="pokemon" @close="$emit('close')"/>
      <div class="pokemon-info-table-container">
        <div class="overflow-y-auto flex-1">
          <PokemonInfoTable :pokemon="pokemon"/>
        </div>
        <div class="flex justify-between items-center pt-4 pb-6">
          <PrimaryButton
              :active="true"
              icon=""
              label="Share to my friends"
              event="click"
              @click="copyClipboard(pokemon)"
          />
          <FavoriteIcon
              :isFavorite="isFavorite(pokemon.name)"
              @click="$emit('toggle-favorite', pokemon)"
              class="cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>