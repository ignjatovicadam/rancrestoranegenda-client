<script setup>
  import { AppHeader, AppFooter } from './components';
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
  <app-footer />
</template>