<template>
  <UTabs v-model="active" :items="items">
    <template #sign-in>
      <AuthSignInForm />
    </template>
    <template #sign-up>
      <AuthSignUpForm @submit="active = 'sign-in'" />
    </template>
  </UTabs>
</template>

<script lang="ts" setup>
import type { TabsItem } from '@nuxt/ui'

definePageMeta( {
  layout: 'auth',
} )

const active = ref( 'sign-in' )

const items: TabsItem[] = [
  {
    label: 'Sign In',
    value: 'sign-in',
    slot: 'sign-in',
  },
  {
    label: 'Sign Up',
    value: 'sign-up',
    slot: 'sign-up',
  },
]
</script>

<style scoped>
</style>
