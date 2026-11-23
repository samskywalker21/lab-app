<template>
  <main class="w-screen h-screen flex flex-col items-center">
    <section class="flex flex-row min-h-(--ui-header-height) items-center" />
    <section class="min-w-[320px] flex flex-col flex-1 gap-4 py-4">
      <LayoutPageHeader
        icon="i-tabler-microscope-filled"
        subtitle="Sign in to continue"
        title="Welcome"
      />
      <slot />
    </section>
    <LayoutPageFooter />
  </main>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>
