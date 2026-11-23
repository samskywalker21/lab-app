<template>
  <UForm
    class="grid grid-cols-1 gap-4"
    novalidate
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <UFormField label="Username" name="username">
      <UInput
        class="w-full"
        icon="i-tabler-user-circle"
        v-model="state.username"
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

const toast = useToast()
const showPassword = ref( false )

const schema = z.object( {
  username: z.string( 'Invalid username' ).trim().min( 1, 'Invalid username' ),
  password: z.string( 'Invalid password' ).trim().min( 1, 'Invalid Password' ),
} )

type FormSchema = z.infer< typeof schema >

const state = reactive< Partial< FormSchema > >( {
  username: undefined,
  password: undefined,
} )

function clearForm() {
  state.username = undefined
  state.password = undefined
}

async function onSubmit( event: FormSubmitEvent< FormSchema > ) {
  event.preventDefault()
  event.stopPropagation()
  const { username, password } = event.data

  const { error } = await authClient.signIn.username( {
    username,
    password,
  } )

  if ( error ) {
    toast.add( {
      title: 'Error',
      description: error.message,
      color: 'error',
    } )
    return
  }

  clearForm()
  toast.add( {
    title: 'Success',
    description: 'Redirecting',
    color: 'success',
  } )
  await navigateTo( '/dashboard' )
}
</script>

<style scoped>
</style>
