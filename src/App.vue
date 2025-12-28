<script setup>
  import { AppFooter, CookieConsent } from './components';
  import AppHeader from './components/AppHeader/AppHeader-New.vue';
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
  <app-footer />
  <cookie-consent />
</template>