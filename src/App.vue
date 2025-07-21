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
              <router-link to="/">HOME</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/about">ABOUT US</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/restaurant">RESTAURANT</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/teambuilding">TEAM BUILDING</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div :class="['mobile-navigation', { open: open }]">
      <ul role="list">
        <li class="fw-semi-bold">
          <router-link to="/">HOME</router-link>
        </li>
        <li class="fw-semi-bold">
          <router-link to="/about">ABOUT US</router-link>
        </li>
        <li class="fw-semi-bold">
          <router-link to="/restaurant">RESTAURANT</router-link>
        </li>
        <li class="fw-semi-bold">
          <router-link to="/teambuilding">TEAM BUILDING</router-link>
        </li>
      </ul>
    </div>
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <div class="container footer-flex">
      <div class="two-columns">
        <div class="flow">
          <h3 class="fs-tertiary-heading fw-bold">Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptatibus rerum quasi pariatur asperiores, quae blanditiis quo consequatur repellendus aut.</p>
        </div>

        <div class="even-columns">
          <div class="footer-item flow">
            <h3 class="fs-tertiary-heading fw-bold">Lorem</h3>
            <ul role="list">
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Lorem ipsum</a>
              </li>
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Lorem ipsum</a>
              </li>
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Lorem ipsum</a>
              </li>
            </ul>
          </div>

          <div class="footer-item flow">
            <h3 class="fs-tertiary-heading fw-bold">Ipsum</h3>
            <ul role="list">
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Lorem ipsum</a>
              </li>
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Lorem ipsum</a>
              </li>
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Lorem ipsum</a>
              </li>
            </ul>
          </div>

          <div class="footer-item flow">
            <h3 class="fs-tertiary-heading fw-bold">Dorem</h3>
            <ul role="list">
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Instagram</a>
              </li>
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Facebook</a>
              </li>
              <li style="--flow-spacer: 0.5em">
                <a href="http://">Tiktok</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="two-columns footer-note">
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
        <p>
          <a href="/privacy">Privacy Policy</a>
          &nbsp;
          <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
</template>