<script setup>
    import { ref } from 'vue';

    const open = ref(false);

    const navigationLinks = [
        { to: '/', label: 'Početna' },
        { to: '/menu', label: 'Jelovnik' },
        { to: '/events', label: 'Proslave' },
        { to: '/restaurant', label: 'Restoran' },
        { to: '/contact', label: 'Kontakt' },
    ];
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="navigation-wrapper">
                <router-link to="/">
                    <img src="/legendA_resized.png" alt="Restoran Ranč Legenda logo" class="logo"/>
                </router-link>

                <nav class="navigation">
                    <ul role="list" class="navigation-list">
                        <li v-for="link in navigationLinks" :key="link.to" class="fw-semi-bold">
                        <router-link :to="link.to">{{ link.label }}</router-link>
                        </li>
                    </ul>
                </nav>

                <button class="mobile-navigation-toggle">
                    <span class="visually-hidden">Menu</span>
                    <div
                        :class="['mobile-navigation-hamburger', { open: open }]"
                        @click="open = !open"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
        </div>

        <div :class="['mobile-navigation', { open: open }]">
            <ul role="list" class="mobile-links">
                <li
                v-for="link in navigationLinks"
                :key="link.to"
                class="fw-semi-bold"
                @click="open = false"
                >
                    <router-link :to="link.to">{{ link.label }}</router-link>
                </li>
            </ul>

            <div class="mobile-navigation-contact-information">
                <h3 class="fs-tertiary-heading fw-bold">Kontakt informacije.</h3>
                <div class="mobile-navigation-contact-information-list" style="margin-top: 1.5em;">
                    <div class="mobile-navigation-contact-informatio-item">
                        <img src="/ranc-restoran-legenda-ikonica-lokacija.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                        <span class="mobile-navigation-contact-description">Obrenovacki drum bb</span>
                    </div>
                    <div class="mobile-navigation-contact-informatio-item">
                        <img src="/ranc-restoran-legenda-ikonica-telefon.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                        <span class="mobile-navigation-contact-description">+381 65 31 24 189</span>
                    </div>
                    <div class="mobile-navigation-contact-informatio-item">
                        <img src="/ranc-restoran-legenda-ikonica-email.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                        <span class="mobile-navigation-contact-description">lorem.ipsum@gmailcom</span>
                    </div>
                </div>
            </div>

            <div class="mobile-navigation-social-links">
                <div class="mobile-navigation-social-link-item">
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
    </header>
</template>


<style scoped>
.header {
    position: fixed;
    top: 0;
    background-color: var(--clr-primary-100);
    width: 100%;
    z-index: 3;
    box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
}

.header .container .navigation-wrapper {
    height: 80px;
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
    transition: max-height 0.3s ease-in-out;
    background: var(--clr-primary-100);
}

.mobile-navigation.open {
    max-height: 800px;
    padding-bottom: 50px;
}

.mobile-navigation ul.mobile-links {
    display: flex;
    flex-direction: column;
    padding-inline: var(--size-400);
    padding-block: var(--size-400);
}

.mobile-navigation ul.mobile-links li {
    border-bottom: 1px solid rgba(15, 15, 15, 0.2);
    padding-block: 1rem;
}

.mobile-navigation ul.mobile-links li a {
    text-decoration: none;
    color: var(--clr-primary-400);
    font-size: var(--fs-400);
}

.mobile-navigation ul.mobile-links li a.router-link-exact-active {
    color: var(--clr-accent-400);
}

.mobile-navigation.open {
    display: block;
}

.navigation-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@media (min-width: 50em) {
    .navigation-wrapper {
        align-items: center;
    }
}

.mobile-navigation-contact-information {
    margin-top: 4em;
    padding-inline: var(--size-400);
}

.mobile-navigation-contact-information-list {
    display: flex;
    flex-direction: column;
    gap: .5em;
}

.mobile-navigation-contact-informatio-item {
    display: flex;
    align-items: center;
    gap: .5em;
}

.mobile-navigation-contact-informatio-item img {
    width: 15px;
    height: 15px;
}

.mobile-navigation-contact-description {
    font-size: var(--fs-300);
    opacity: 0.7;
}

.mobile-navigation-social-links {
    margin-top: 1em;
    padding-inline: var(--size-400);

    ul {
        display: flex;
        align-items: center;
        gap: .5em;
    }

    ul li a {
        text-decoration: none;
        color: inherit;
        opacity: 0.7;
        position: relative;
        display: inline-block;
        font-size: var(--fs-300);
    }
}
</style>