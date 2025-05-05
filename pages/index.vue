<script setup lang="ts">
import type { User } from '~/src/types'
import { useToastStore } from '~/src/stores/toastStore'

const user: User = {
  id: '1',
  name: 'John Doe',
  email: 'john.doe@example.com'
}

console.log(user)

const toastStore = useToastStore()

toastStore.show('Hello, world!', 'success', 3000)
</script>

<template>
  <div class="h-full">
    <div class="pt-16 text-red-500 h-full">Home Page</div>
  </div>
</template>
