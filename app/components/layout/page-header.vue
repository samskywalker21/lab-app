<template>
  <section class="flex flex-row items-center gap-2">
    <UIcon class="text-5xl text-primary" v-if="icon" :name="icon" />
    <section>
      <h1 class="text-2xl font-bold">{{ title }}</h1>
      <p class="text-sm text-dimmed">{{ subtitle }}</p>
    </section>
  </section>
</template>

<script lang="ts" setup>
const { title, subtitle, icon } = defineProps< {
  title: string
  subtitle: string
  icon?: string
} >()
</script>

<style scoped>
</style>
