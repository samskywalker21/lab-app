<template>
  <USidebar
    v-model:open="open"
    :ui="{
      header: 'border-0',
    }"
  >
    <template #header>
      <section class="flex flex-row justify-between items-center w-full">
        <h3 class="text-xl font-bold">Laboratory App</h3>
        <UButton
          class="lg:hidden"
          color="neutral"
          icon="i-tabler-square-x"
          variant="link"
          @click="open = ! open"
        />
      </section>
    </template>

    <UNavigationMenu orientation="vertical" variant="link" :items="main" />
  </USidebar>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

const open = defineModel< boolean >( 'open', { default: true } )

const main: NavigationMenuItem[] = [
  {
    label: 'Home',
    open: true,
    children: [
      {
        label: 'Dashboard',
        type: 'link',
        to: '/dashboard',
      },
    ],
  },
]
</script>

<style scoped>
</style>
