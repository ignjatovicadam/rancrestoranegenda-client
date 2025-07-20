<script setup>
  import { ref } from 'vue';

  const open = ref(false);
</script>

<template>
  <header :class="['header', { open: open }]">
    <div class="container">
      <div class="navigation-wrapper">
        <router-link to="/">
          <img src="/vite.svg" alt="" srcset="">
        </router-link>
  
        <button class="mobile-navigation-toggle">
          <span class="visually-hidden">Menu</span>
          <div :class="['mobile-navigation-hamburger', { open: open }]" @click="open = !open">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
  
        <nav class="navigation">
          <ul role="list" class="navigation-list">
            <li class="fw-semi-bold">
              <router-link to="/about">ABOUT US</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/about">MENU</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/about">FEATURES</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/about">BRUNCH</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/about">CONTACT</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div :class="['mobile-navigation', { open: open }]">
      <ul role="list">
        <li class="fw-semi-bold">
          <router-link to="/about">ABOUT US</router-link>
        </li>
        <li class="fw-semi-bold">
          <router-link to="/about">MENU</router-link>
        </li>
        <li class="fw-semi-bold">
          <router-link to="/about">FEATURES</router-link>
        </li>
        <li class="fw-semi-bold">
          <router-link to="/about">BRUNCH</router-link>
        </li>
        <li class="fw-semi-bold">
          <router-link to="/about">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </header>

  <main>
    <router-view />
  </main>

  <footer class="padding-block-700">
    <div class="container">
      <div class="two-columns">
        <div>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>

        <div class="even-columns">
          <div>
            <h4>Lorem</h4>
            <ul role="list">
              <li>
                <a href="http://">Lorem ipsum</a>
              </li>
              <li>
                <a href="http://">Lorem ipsum</a>
              </li>
              <li>
                <a href="http://">Lorem ipsum</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Ipsum</h4>
            <ul role="list">
              <li>
                <a href="http://">Lorem ipsum</a>
              </li>
              <li>
                <a href="http://">Lorem ipsum</a>
              </li>
              <li>
                <a href="http://">Lorem ipsum</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Dorem</h4>
            <ul role="list">
              <li>
                <a href="http://">Instagram</a>
              </li>
              <li>
                <a href="http://">Facebook</a>
              </li>
              <li>
                <a href="http://">Tiktok</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="even-columns footer-note">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a> · <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
</template>