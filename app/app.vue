<template>
  <UApp
    :toaster="{
      position: 'top-right',
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
useHead( {
  titleTemplate( title ) {
    return title ? `${ title } • Laboratory App` : 'Laboratory App'
  },
} )
</script>
