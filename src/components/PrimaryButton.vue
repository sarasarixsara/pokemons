<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()
const props = defineProps({
  href: String,
  active: Boolean,
  icon: String,
  label: String,
  event: String
})

const emit = defineEmits(['click'])

const handleClick = () => {
  if (props.event) {
    emit('click')
  }
  if (props.href) {
    router.push(props.href)
  }
}
</script>

<template>
  <button
      @click="handleClick"
      class="primary-button"
      :class="[
      active ? 'bg-pokeBrightRed hover:bg-pokeRed' : 'bg-pokeGray-200',
      href ? '' : 'cursor-pointer'
    ]"
  >
    <img v-if="icon" :src="icon" :alt="label + ' icon'" class="w-4"/>
    <span>{{ label }}</span>
  </button>
</template>
