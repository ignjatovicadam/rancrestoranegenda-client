<script setup>
  import { AppFooter, AppHeader, CookieConsent } from './components';

  const robotsContent = import.meta.env.VITE_ROBOTS_META;
  const metaTag = document.querySelector('meta[name="robots"]');
  metaTag.setAttribute('content', robotsContent);
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
  <app-footer />
  <cookie-consent />
</template>