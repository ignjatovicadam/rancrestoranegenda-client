<script setup>
    import { ref } from 'vue';
    import headerLogo from '../../assets/images/restoran-ranc-legenda-logotip.webp';

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
                    <li class="navigation-list-item"><router-link to="/menu" class="fw-semi-bold">Jelovnik</router-link></li>
                    <li class="navigation-list-item dropdown">
                        <span class="fw-semi-bold">Proslave</span>
                        <div class="dropdown-menu">
                            <ul>
                                <li class="dropdown-menu-item">
                                    <a href="/rancrestoranegenda-client/docs/restoranc-ranc-legenda-ponuda-proslave-2025.pdf" target="_blank" class="fw-semi-bold">Ponuda (PDF)</a>
                                    <span class="menu-item-sub">Pogledajte detaljnije ponudu</span>
                                </li>
                                <li class="dropdown-menu-item">
                                    <router-link to="/birthday-parties" class="fw-semi-bold">Rođendani</router-link>
                                    <span class="menu-item-sub">Organizovani rodjendani</span>
                                </li>
                                <li class="dropdown-menu-item">
                                    <router-link to="/teambuilding" class="fw-semi-bold">Team building</router-link>
                                    <span class="menu-item-sub">Organizovani team building</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="navigation-list-item"><router-link to="/restaurant" class="fw-semi-bold">Restoran</router-link></li>
                    <li class="navigation-list-item"><router-link to="/contact" class="fw-semi-bold">Kontakt</router-link></li>
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
                <li @click="open = false"><router-link to="/menu">Jelovnik</router-link></li>
                <li @click="open = false"><a href="/rancrestoranegenda-client/docs/restoranc-ranc-legenda-ponuda-proslave-2025.pdf" target="_blank">Ponuda proslave (PDF)</a></li>
                <li @click="open = false"><router-link to="/birthday-parties">Rođendani</router-link></li>
                <li @click="open = false"><router-link to="/teambuilding">Team building</router-link></li>
                <li @click="open = false"><router-link to="/restaurant">Restoran</router-link></li>
                <li @click="open = false"><router-link to="/contact">Kontakt</router-link></li>
            </ul>

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
    header {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: var(--clr-primary-100);
        z-index: 3;
        box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
    }

    header .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 80px;
    }

    nav {
        display: none;
    }

    @media (min-width: 50em) {
        nav {
            display: block;
        }

        .navigation-list {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }

        .navigation-list-item {
            position: relative;
        }

        .dropdown-toggle {
            display: flex;
            align-items: center;
            gap: 4px;
            cursor: pointer;
        }

        .navigation-list-item .chevron-down {
            width: 12px;
            height: 12px;
        }

        .navigation-list-item a, .navigation-list-item span {
            text-decoration: none;
            color: var(--clr-primary-400);
            font-size: var(--fs-nav);
            font-family: var(--ff-secondary);
            cursor: pointer;
        }

        .navigation-list-item a::after {
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

        .navigation-list-item a:hover::after,
        .navigation-list-item a.router-link-exact-active::after,
        .navigation-list-item span:hover::after {
            width: 100%;
        }

        .dropdown-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0%;
            background-color: var(--clr-primary-100);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            overflow: hidden;
            z-index: 10;
            width: 280px;
        }

        .dropdown-menu ul {
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .dropdown-menu-item {
            padding: .7rem 1rem;
        }

        .dropdown-menu-item a {
            text-decoration: none;
            color: var(--clr-neutral-900);
            font-weight: 500;
            font-size: var(--fs-nav);
            display: block;
        }

        .menu-item-sub {
            font-size: var(--fs-200);
            opacity: 0.7;
        }

        .dropdown-menu-item a:hover {
            background-color: var(--clr-accent-100);
        }

        .dropdown:hover .dropdown-menu {
            display: block;
        }
    }

    .mobile-menu-toggle {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (min-width: 50em) {
        .mobile-menu-toggle {
            display: none;
        }
    }

    .hamburger {
        width: 1.25em;
        height: 1.25em;
        font-size: inherit;
        transition: all 0.3s ease;
        position: relative;
    }

    .hamburger span {
        position: absolute;
        right: 0;
        width: 100%;
        height: 0.125em;
        border-radius: 0.125em;
        background: var(--clr-primary-400);
        transition: all 0.3s ease;
    }

    .hamburger span:nth-child(1) {
        top: 0.125em;
    }

    .hamburger span:nth-child(2) {
        top: 0.438em;
    }

    .hamburger span:nth-child(3) {
        top: 0.75em;
        width: 0.625em;
    }

    .hamburger.is-open span:nth-child(1) {
        top: 50%;
        transform: translateY(-50%) rotateZ(-135deg);
    }

    .hamburger.is-open span:nth-child(2) {
        right: 50%;
        width: 0;
    }

    .hamburger.is-open span:nth-child(3) {
        top: 50%;
        width: 100%;
        transform: translateY(-50%) rotateZ(135deg);
    }

    .mobile-menu {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: var(--clr-primary-100);
        max-height: 0;
        opacity: 0;
        overflow: hidden;
        transition: 
            max-height 0.4s ease, 
            opacity 0.4s ease, 
            transform 0.4s ease;
        transform: translateY(-10px);
        z-index: 2;
    }

    .mobile-menu.open {
        max-height: 500px;
        opacity: 1;
        transform: translateY(0);
    }

    .mobile-navigation-list {
        margin: 0;
        display: flex;
        flex-direction: column;
        padding-inline: var(--size-400);
        padding-block: var(--size-400);
    }

    .mobile-navigation-list li {
        margin-bottom: var(--size-300);
        border-bottom: 1px solid rgba(15, 15, 15, 0.2);
    }

    .mobile-navigation-list li a,
    .mobile-navigation-list li span {
        text-decoration: none;
        color: var(--clr-primary-400);
        font-size: var(--fs-400);
        display: block;
        padding-block: var(--size-200);
    }

    .mobile-navigation-list li a.router-link-exact-active,
    .mobile-navigation-list li span.router-link-exact-active {
        color: var(--clr-accent-400);
    }

    .mobile-navigation-social-links {
        padding: var(--size-400);
        margin-top: 1rem;

        ul {
            display: flex;
            align-items: center;
            gap: .5em;
        }

        ul li a {
            text-decoration: none;
            color: inherit;
            opacity: 0.7;
            display: inline-block;
            font-size: var(--fs-300);
        }
    }
</style>