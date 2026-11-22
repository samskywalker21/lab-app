<template>
  <main
    class="w-screen h-screen py-(--ui-header-height) flex flex-col items-center"
  >
    <article class="min-w-[320px] flex flex-col border gap-4">
      <section class="flex flex-row items-center gap-2">
        <UIcon
          class="text-5xl text-primary"
          name="i-solar-microscope-bold-duotone"
        />
        <section>
          <h1 class="text-2xl font-bold">Welcome</h1>
          <p class="text-sm text-dimmed">Sign in to continue</p>
        </section>
      </section>
      <slot />
    </article>
  </main>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>
