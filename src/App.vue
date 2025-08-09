<script setup>
  import { AppHeader } from './components/AppHeader';
</script>

<template>
  <app-header />

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