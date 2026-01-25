<script setup>
  import { AppFooter, AppHeader, CookieConsent } from '@/components';
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
  <app-footer />
  <cookie-consent />
</template>