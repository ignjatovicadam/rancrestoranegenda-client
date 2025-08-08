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
              <router-link to="/">Home</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/about">About us</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/restaurant">Restaurant</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/teambuilding">Team building</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/brunch">Vikend brunch</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/menu">Menu</router-link>
            </li>
            <li class="fw-semi-bold">
              <router-link to="/contact">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div :class="['mobile-navigation', { open: open }]">
      <ul role="list">
        <li class="fw-semi-bold" @click="open = false">
          <router-link to="/">Home</router-link>
        </li>
        <li class="fw-semi-bold" @click="open = false">
          <router-link to="/about">About us</router-link>
        </li>
        <li class="fw-semi-bold" @click="open = false">
          <router-link to="/restaurant">Restaurant</router-link>
        </li>
        <li class="fw-semi-bold" @click="open = false">
          <router-link to="/teambuilding">Team building</router-link>
        </li>
        <li class="fw-semi-bold" @click="open = false">
          <router-link to="/brunch">Vikend brunch</router-link>
        </li>
        <li class="fw-semi-bold" @click="open = false">
          <router-link to="/events">Events</router-link>
        </li>
        <li class="fw-semi-bold" @click="open = false">
          <router-link to="/menu">Menu</router-link>
        </li>
        <li class="fw-semi-bold" @click="open = false">
          <router-link to="/contact">Contact</router-link>
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
              <li class="flow-spacer-200">
                <a href="http://">Lorem ipsum</a>
              </li>
              <li class="flow-spacer-200">
                <a href="http://">Lorem ipsum</a>
              </li>
              <li class="flow-spacer-200">
                <a href="http://">Lorem ipsum</a>
              </li>
            </ul>
          </div>

          <div class="footer-item flow">
            <h3 class="fs-tertiary-heading fw-bold">Ipsum</h3>
            <ul role="list">
              <li class="flow-spacer-200">
                <a href="http://">Lorem ipsum</a>
              </li>
              <li class="flow-spacer-200">
                <a href="http://">Lorem ipsum</a>
              </li>
              <li class="flow-spacer-200">
                <a href="http://">Lorem ipsum</a>
              </li>
            </ul>
          </div>

          <div class="footer-item flow">
            <h3 class="fs-tertiary-heading fw-bold">Dorem</h3>
            <ul role="list">
              <li class="flow-spacer-200">
                <a href="http://">Instagram</a>
              </li>
              <li class="flow-spacer-200">
                <a href="http://">Facebook</a>
              </li>
              <li class="flow-spacer-200">
                <a href="http://">Tiktok</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="two-columns footer-note">
        <p>&copy; 2025 Lorem, ipsum. All rights reserved.</p>
        <p>
          <router-link to="/privacypolicy">Privacy Policy</router-link>
          &nbsp;
          <router-link to="/termsofuse">Terms of use</router-link>
        </p>
      </div>
    </div>
  </footer>
</template>