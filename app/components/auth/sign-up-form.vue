<template>
  <UForm
    class="grid grid-cols-1 gap-4"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <section class="grid grid-cols-1 gap-4">
      <UFormField label="First Name" name="firstName">
        <UInput class="w-full" v-model="state.firstName" />
      </UFormField>
      <UFormField label="Last Name" name="lastName">
        <UInput class="w-full" v-model="state.lastName" />
      </UFormField>
      <UFormField
        help="Must be at least 6 characters"
        label="Username"
        name="username"
      >
        <UInput class="w-full" v-model="state.username" />
      </UFormField>
      <UFormField
        help="Must be at least 8 characters"
        label="Password"
        name="password"
      >
        <UInput
          class="w-full"
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
    </section>
    <UButton class="justify-center" label="Sign Up" type="submit" />
  </UForm>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import * as z from 'zod'

const emits = defineEmits( [ 'submit' ] )

const toast = useToast()
const showPassword = ref( false )

const schema = z.object( {
  firstName: z
    .string( 'Invalid first name' )
    .trim()
    .toUpperCase()
    .min( 1, 'Invalid first name' ),
  lastName: z
    .string( 'Invalid last name' )
    .trim()
    .toUpperCase()
    .min( 1, 'Invalid last name' ),
  username: z.string( 'Invalid username' ).trim().min( 1, 'Invalid username' ),
  password: z.string( 'Invalid password' ).trim().min( 1, 'Invalid Password' ),
} )

type FormSchema = z.infer< typeof schema >

const state = reactive< Partial< FormSchema > >( {
  firstName: undefined,
  lastName: undefined,
  username: undefined,
  password: undefined,
} )

async function onSubmit( event: FormSubmitEvent< FormSchema > ) {
  event.preventDefault()
  event.stopPropagation()
  const { firstName, lastName, password, username } = event.data

  const { error } = await authClient.signUp.email( {
    email: 'placeholder@example.com',
    firstName,
    lastName,
    name: `${ lastName }, ${ firstName }`,
    password,
    username,
  } )

  if ( error ) {
    toast.add( {
      title: 'Error',
      description: error.message,
      color: 'error',
    } )

    return
  }

  toast.add( {
    title: 'Success',
    description: 'You may now sign in',
    color: 'success',
  } )
  emits( 'submit' )
}
</script>

<style scoped>
</style>
