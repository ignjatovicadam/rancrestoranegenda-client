<script setup>
  import { AppHeader } from './components/AppHeader';
  import { AppFooter } from './components/AppFooter';
</script>

<template>
  <app-header />
  <main>
    <router-view />
  </main>
  <app-footer />
</template>