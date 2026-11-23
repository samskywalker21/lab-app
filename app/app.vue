import * as ui from '#build/ui';
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
