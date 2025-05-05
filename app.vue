<script setup lang="ts">

useSeoMeta({
  title: 'Nuxt App Template',
  description: 'The Nuxt App Template'
  // ogTitle: '[og:title]',
  // ogDescription: '[og:description]',
  // ogImage: '[og:image]',
  // ogUrl: '[og:url]',
  // twitterTitle: '[twitter:title]',
  // twitterDescription: '[twitter:description]',
  // twitterImage: '[twitter:image]',
  // twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>

<template>
  <div>
    <NuxtPage />
    <DSToastContainer />
  </div>
</template>

<style lang="scss">
html {
  @apply bg-gray-100;
  font-family: 'Inter', sans-serif;
}
html,
body,
#__nuxt {
  @apply h-full overflow-hidden;
}
</style>
