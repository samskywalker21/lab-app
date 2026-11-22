<template>
  <UForm
    class="grid grid-cols-1 gap-4"
    novalidate
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <UFormField label="Email" name="email">
      <UInput
        class="w-full"
        icon="i-tabler-user-circle"
        type="email"
        v-model="state.email"
      />
    </UFormField>
    <UFormField label="Password" name="password">
      <UInput
        class="w-full"
        icon="i-tabler-circle-key"
        v-model="state.password"
        :type="showPassword ? 'text' : 'password'"
      >
        <template #trailing>
          <UButton
            color="neutral"
            variant="link"
            :icon="showPassword ? 'i-tabler-eye-closed' : 'i-tabler-eye'"
            @click="showPassword = ! showPassword"
          />
        </template>
      </UInput>
    </UFormField>
    <UButton class="justify-center" label="Sign In" type="submit" />
  </UForm>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

definePageMeta( {
  layout: 'auth',
} )

const showPassword = ref( false )

const schema = z.object( {
  email: z.email( 'Required' ).trim(),
  password: z.string( 'Required' ).min( 1, 'Required' ).trim(),
} )

type FormSchema = z.infer< typeof schema >

const state = reactive< Partial< FormSchema > >( {
  email: undefined,
  password: undefined,
} )

async function onSubmit( event: FormSubmitEvent< FormSchema > ) {}
</script>

<style scoped>
</style>
