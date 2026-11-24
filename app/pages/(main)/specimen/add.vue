<template>
  <article class="flex flex-col flex-1 gap-4">
    <LayoutPageHeader icon="i-tabler-microscope-filled" title="Add Specimen" />
    <SpecimenAddForm />
  </article>
</template>

<script lang="ts" setup>
useHead( {
  title: 'Add Specimen',
} )
</script>

<style scoped>
</style>
