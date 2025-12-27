<script setup>
    import { ref } from 'vue';
    import { MapPinHouse, Phone, Mail } from 'lucide-vue-next';
    import headerLogo from '../../assets/images/restoran-ranc-legenda-logotip.webp';

    const open = ref(false);

    const proslaveOpen = ref(false);

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
                    <img :src="headerLogo" class="header-logo" alt="Restoran ranč Legenda logotip"/>
                </router-link>

                <nav class="navigation">
                    <ul role="list" class="navigation-list">
                        <li v-for="link in navigationLinks" :key="link.to" class="fw-semi-bold" style="position: relative;">
                            <template v-if="link.label === 'Proslave'">
                                <div @mouseenter="proslaveOpen = true" @mouseleave="proslaveOpen = false">
                                    <a 
                                        href="/rancrestoranegenda-client/docs/restoranc-ranc-legenda-ponuda-proslave-2025.pdf" 
                                        target="_blank"
                                    >
                                        Proslave
                                    </a>
                                    <ul
                                        v-if="proslaveOpen"
                                        class="dropdown-menu"
                                        role="menu"
                                    >
                                        <li>
                                        <router-link role="menuitem" to="/events/svadbe">Svadbe</router-link>
                                        </li>
                                        <li>
                                        <router-link role="menuitem" to="/events/rodjendani">Rođendani</router-link>
                                        </li>
                                        <li>
                                        <a
                                            role="menuitem"
                                            href="/rancrestoranegenda-client/docs/restoranc-ranc-legenda-ponuda-proslave-2025.pdf"
                                            target="_blank"
                                        >
                                            Ponuda (PDF)
                                        </a>
                                        </li>
                                        </ul>
                                </div>
                            </template>


                            <template v-else>
                                <router-link :to="link.to">{{ link.label }}</router-link>
                            </template>
                        </li>
                    </ul>
                </nav>

                <button class="mobile-navigation-toggle">
                    <span class="visually-hidden">Navigacioni meni</span>
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
                <h3 class="fs-tertiary-heading fw-bold">Kontakt informacije</h3>

                <div class="mobile-navigation-contact-information-list">
                    <div class="mobile-navigation-contact-information-item">
                        <MapPinHouse class="header-icon"/>
                        <a href="https://maps.app.goo.gl/LaHBFP5g7YFuhfYt7">
                            <span class="mobile-navigation-contact-description">Obrenovački drum bb, Beograd</span>
                        </a>
                    </div>

                    <div class="mobile-navigation-contact-information-item">
                        <Phone class="header-icon"/>
                        <span class="mobile-navigation-contact-description">Restoran +381 64 1417 232</span>
                    </div>

                    <div class="mobile-navigation-contact-information-item">
                        <Phone class="header-icon"/>
                        <span class="mobile-navigation-contact-description">Proslave +381 65 9393 557</span>
                    </div>

                    <div class="mobile-navigation-contact-information-item">
                        <Mail class="header-icon"/>
                        <span class="mobile-navigation-contact-description">kontakt@ranclegenda.rs</span>
                    </div>
                </div>
            </div>

            <div class="mobile-navigation-contact-information">
                    <h3 class="fs-tertiary-heading fw-bold">Radno vreme</h3>

                    <div class="mobile-navigation-contact-information-list">
                        <div class="mobile-navigation-contact-information-item">
                            <span class="mobile-navigation-contact-description">Zimsko radno vreme:</span>
                            <span class="mobile-navigation-contact-description">sub - ned 12:00 - 20:00</span>
                        </div>
    
                        <div class="mobile-navigation-contact-information-item">
                            <span class="mobile-navigation-contact-description">Letnje radno vreme:</span>
                            <span class="mobile-navigation-contact-description">uto - ned 12:00 - 20:00</span>
                        </div>

                        <div class="mobile-navigation-contact-information-item">
                            <span class="mobile-navigation-contact-description">Radno vreme za proslave po dogovoru</span>
                        </div>
                    </div>
                </div>

            <div class="mobile-navigation-social-links">
                <div class="mobile-navigation-social-link-item">
                    <ul role="list">
                        <li class="flow-spacer-200">
                            <a href="https://www.instagram.com/legenda_ranc/">Instagram</a>
                        </li>
                        <li class="flow-spacer-200">
                            <a href="https://www.facebook.com/ranclegenda/?locale=sr_RS">Facebook</a>
                        </li>
                        <li class="flow-spacer-200">
                            <a href="https://www.tiktok.com/@restoranlegenda">Tiktok</a>
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
    overflow: auto;
    height: 0;
    transition: height 0.3s ease-in-out;
    background: var(--clr-primary-100);
}

.mobile-navigation.open {
    height: 100vh;
    padding-bottom: 4rem;
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
    margin-top: 2rem;
    padding-inline: var(--size-400);
}

.mobile-navigation-contact-information-list {
    display: flex;
    flex-direction: column;
    gap: .5em;
    margin-top: 1rem;
}

.mobile-navigation-contact-information-item {
    display: flex;
    align-items: center;
    gap: .5em;
}

.mobile-navigation-contact-information-item .header-icon {
    width: 20px;
    height: 20px;
}

.mobile-navigation-contact-description {
    font-size: var(--fs-300);
    opacity: 0.7;
}

.mobile-navigation-social-links {
    margin-top: 1rem;
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

.dropdown-menu {
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  background: var(--clr-primary-100);
  border-radius: 0.5rem;
  min-width: 200px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  padding: 0.5rem 0;
  z-index: 10;
}

.dropdown-menu a {
  display: block;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: var(--clr-primary-400);
}

.dropdown-menu a:hover {
  background: rgba(0,0,0,0.05);
}
</style>