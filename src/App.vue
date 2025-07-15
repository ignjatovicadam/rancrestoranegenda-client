<script setup>
</script>

<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>

    <div>
      <router-view />
    </div>
  </div>
</template>