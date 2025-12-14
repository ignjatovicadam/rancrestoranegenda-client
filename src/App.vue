<script setup>
  import { AppHeader, AppFooter, AppCookieConsent } from './components';
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
  <app-cookie-consent />
  <app-footer />
</template>