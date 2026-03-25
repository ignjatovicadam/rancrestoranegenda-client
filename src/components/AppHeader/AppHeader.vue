<script setup>
    import { ref } from 'vue';
    import headerLogo from '@/assets/images/restoran-ranc-legenda-logotip.webp';

    const open = ref(false);
</script>


<template>
    <header class="header">
        <div class="container">
            <div>
                <router-link to="/">
                    <img :src="headerLogo" alt="Restoran ranč Legenda logotip"/>
                </router-link>
            </div>

            <nav>
                <ul class="navigation-list" role="list">
                    <li class="navigation-list-item"><router-link to="/" class="fw-semi-bold">Početna</router-link></li>
                    <li class="navigation-list-item"><router-link to="/jelovnik" class="fw-semi-bold">Jelovnik</router-link></li>
                    <li class="navigation-list-item dropdown">
                        <span class="fw-semi-bold">Proslave</span>
                        <div class="dropdown-menu">
                            <ul>
                                <li class="dropdown-menu-item">
                                    <a href="/docs/ranc-restoran-legenda-ponuda-zimski-period.pdf?v=2" target="_blank">
                                        <span class="fw-semi-bold">Proslave novembar - mart</span>
                                        <span class="menu-item-sub">Pogledajte detaljnije ponudu za zimski period</span>
                                    </a>
                                </li>
                                <li class="dropdown-menu-item">
                                    <a href="/docs/ranc-restoran-legenda-ponuda-letnji-period.pdf?v=2" target="_blank">
                                        <span class="fw-semi-bold">Proslave april - oktobar</span>
                                        <span class="menu-item-sub">Pogledajte detaljnije ponudu za letnji period</span>
                                    </a>
                                </li>
                                <li class="dropdown-menu-item">
                                    <router-link to="/rodjendanske-zabave">
                                        <span class="fw-semi-bold">Rođendani</span>
                                        <span class="menu-item-sub">Organizovani rođendani</span>
                                    </router-link>
                                </li>
                                <li class="dropdown-menu-item">
                                    <router-link to="/team-building">
                                        <span class="fw-semi-bold">Team building</span>
                                        <span class="menu-item-sub">Organizovani team building</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="navigation-list-item"><router-link to="/o-restoranu" class="fw-semi-bold">Restoran</router-link></li>
                    <router-link to="/kontakt" class="button button-primary">Kontakt</router-link>
                </ul>
            </nav>

            <button 
                class="mobile-menu-toggle" 
                @click="open = !open"
                :aria-expanded="open.toString()"
            >
                <span class="visually-hidden">Navigacioni meni</span>
                <div :class="[' hamburger', { 'is-open': open }]">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>

        <div :class="['mobile-menu', { open: open }]">
            <ul class="mobile-navigation-list" role="list">
                <li @click="open = false"><router-link to="/">Početna</router-link></li>
                <li @click="open = false"><router-link to="/jelovnik">Jelovnik</router-link></li>
                <li @click="open = false"><a href="/docs/ranc-restoran-legenda-ponuda-zimski-period.pdf?v=2" target="_blank">Ponuda proslave novembar - mart</a></li>
                <li @click="open = false"><a href="/docs/ranc-restoran-legenda-ponuda-letnji-period.pdf?v=2" target="_blank">Ponuda proslave april - oktobar</a></li>
                <li @click="open = false"><router-link to="/rodjendanske-zabave">Rođendani</router-link></li>
                <li @click="open = false"><router-link to="/team-building">Team building</router-link></li>
                <li @click="open = false"><router-link to="/o-restoranu">Restoran</router-link></li>
                <li @click="open = false"><router-link to="/kontakt">Kontakt</router-link></li>
            </ul>

            <div class="mobile-navigation-social-links">
                <div class="mobile-navigation-social-link-item">
                    <ul role="list">
                        <li class="flow-spacer-200">
                            <a href="https://www.instagram.com/legenda_ranc/" target="_blank">Instagram</a>
                        </li>
                        <li class="flow-spacer-200">
                            <a href="https://www.facebook.com/ranclegenda/?locale=sr_RS" target="_blank">Facebook</a>
                        </li>
                        <li class="flow-spacer-200">
                            <a href="https://www.tiktok.com/@restoranlegenda" target="_blank">Tiktok</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style src="./app-header.css" scoped></style>