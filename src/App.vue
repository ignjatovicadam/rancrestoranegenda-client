<script setup>
  import { AppFooter, AppCookieConsent } from './components';
  import AppHeader from './components/AppHeader/AppHeader-New.vue';
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
  <app-footer />
  <app-cookie-consent />
</template>