<template>
  <main class="h-screen w-screen flex flex-row">
    <LayoutSidebar v-model:open="sidebarOpen" />
    <article class="flex flex-col flex-1">
      <LayoutHeader>
        <section
          class="flex flex-row-reverse justify-between items-center px-8 w-full"
        >
          <UColorModeButton color="primary" />
          <UButton
            class="lg:hidden"
            icon="i-tabler-menu-2-filled"
            variant="link"
            @click="sidebarOpen = ! sidebarOpen"
          />
        </section>
      </LayoutHeader>
      <section class="flex flex-col flex-1 p-6">
        <slot />
      </section>
      <LayoutPageFooter />
    </article>
  </main>
</template>

<script lang="ts" setup>
const sidebarOpen = ref( true )
</script>

<style scoped>
</style>
