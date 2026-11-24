<template>
  <UForm class="flex flex-col gap-4">
    <section
      class="grid grid-cols-1 lg:grid-cols-2 border border-primary gap-2"
    >
      <UFormField label="Serial">
        <UInput class="w-full" />
      </UFormField>
      <UFormField label="Last Name">
        <UInput class="w-full" />
      </UFormField>
      <UFormField label="First Name">
        <UInput class="w-full" />
      </UFormField>
      <UFormField label="Middle Name">
        <UInput class="w-full" />
      </UFormField>
      <UFormField label="Facility">
        <USelectMenu class="w-full" />
      </UFormField>
      <UFormField label="History of Treatment">
        <USelect class="w-full" />
      </UFormField>
      <UFormField label="Reason for Treatment">
        <USelectMenu class="w-full" />
      </UFormField>
      <UFormField label="Follow-up">
        <UInput class="w-full" />
      </UFormField>
      <UFormField label="Volume">
        <UInput class="w-full" />
      </UFormField>
      <UFormField label="Consistency">
        <UInput class="w-full" />
      </UFormField>
      <UFormField label="Date Collected">
        <UInput class="w-full" type="datetime-local" />
      </UFormField>
      <UFormField label="Date Received">
        <UInput class="w-full" type="datetime-local" />
      </UFormField>
      <UFormField label="Status">
        <USelect class="w-full" />
      </UFormField>
      <UFormField label="Remarks">
        <UInput class="w-full" />
      </UFormField>
    </section>
    <UButton class="w-full justify-center" label="Submit" />
  </UForm>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>
