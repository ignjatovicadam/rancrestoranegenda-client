<script setup>
    import { ref } from 'vue';

    const open = ref(false);
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="navigation-wrapper">
                <router-link to="/">
                    <img src="/vite.svg" alt="Restoran Ranč Legenda logo">
                </router-link>

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

                <button class="mobile-navigation-toggle">
                    <span class="visually-hidden">Menu</span>
                    <div :class="['mobile-navigation-hamburger', { open: open }]" @click="open = !open">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
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
</template>

<style scoped>
.header {
    position: fixed;
    top: 0;
    background-color: var(--clr-primary-100);
    width: 100%;
    z-index: 3;
    padding-block: var(--size-500);
    box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
}

.navigation {
    display: none;
}

.navigation-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.navigation-list li a {
    text-decoration: none;
    color: var(--clr-primary-400);
    font-size: var(--fs-nav);
    font-family: var(--ff-secondary);
    position: relative;
    display: inline-block;
}

.navigation-list li a:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--clr-accent-400);
    transition: width 0.3s ease;
}

.navigation-list li a:hover::after,
.navigation-list li .router-link-exact-active::after {
    width: 100%;
}

.mobile-navigation-toggle {
    background: transparent;
    border: 0;
    cursor: pointer;
}

@media (min-width: 50em) {
    .mobile-navigation-toggle {
        display: none;
    }

    .navigation {
        display: block;
    }
}

.mobile-navigation-hamburger {
    position: relative;
    width: 1.25em;
    height: 1.25em;
    font-size: inherit;
    transition: all 0.3s ease;
}

.mobile-navigation-hamburger span {
    position: absolute;
    right: 0;
    width: 100%;
    height: 0.125em;
    border-radius: 0.125em;
    background: var(--clr-primary-400);
    transition: all 0.3s ease;
}

.mobile-navigation-hamburger span:nth-child(1) {
    top: 0.125em;
}

.mobile-navigation-hamburger span:nth-child(2) {
    top: 0.438em;
}

.mobile-navigation-hamburger span:nth-child(3) {
    top: 0.75em;
    width: 0.625em;
}

.mobile-navigation-hamburger.open span:nth-child(1) {
    top: 50%;
    transform: translateY(-50%) rotateZ(-135deg);
}

.mobile-navigation-hamburger.open span:nth-child(2) {
    right: 50%;
    width: 0;
}

.mobile-navigation-hamburger.open span:nth-child(3) {
    top: 50%;
    width: 100%;
    transform: translateY(-50%) rotateZ(135deg);
}

.mobile-navigation {
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease;
    background: var(--clr-primary-100);
}

.mobile-navigation.open {
    max-height: 500px;
}

.mobile-navigation ul {
    display: flex;
    flex-direction: column;
    padding-inline: var(--size-400);
    padding-block: var(--size-400);
}

.mobile-navigation ul li {
    border-bottom: 1px solid rgba(15, 15, 15, 0.2);
    padding-block: 1rem;
}

.mobile-navigation ul li a {
    text-decoration: none;
    color: var(--clr-primary-400);
    font-size: var(--fs-400);
}

.mobile-navigation.open {
    display: block;
}

.navigation-wrapper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

@media (min-width: 50em) {
    .navigation-wrapper {
        align-items: center;
    }
}
</style>