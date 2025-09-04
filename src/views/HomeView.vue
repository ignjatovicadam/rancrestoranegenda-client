<script setup>
    import { AppHero } from '../components/AppHero';
    import { BookingForm } from '../components/BookingForm';

    const menu = [
        {
            category: "Jela sa roštilja",
            items: [
            { name: "Ćevapi juneći (300g)", price: "1200 RSD" },
            { name: "Pljeskavica juneća (300g)", price: "1200 RSD" },
            { name: "Gurmanska pljeskavica (300g)", price: "1300 RSD" },
            { name: "Gurmanski uštipci (300g)", price: "1300 RSD" },
            { name: "Pileći file (300g)", price: "950 RSD" },
            { name: "Pileći ražnjići rol. slaninicom (300g)", price: "1200 RSD" },
            { name: "Rebarca na kajmaku (300g)", price: "1200 RSD" },
            { name: "Svinjski vrat na žaru (300g)", price: "1050 RSD" },
            { name: "Kobasica (300g)", price: "1100 RSD" },
            { name: "Bela vešalica (300g)", price: "1100 RSD" },
            { name: "Rolovana punjena bela vešalica (300g)", price: "1500 RSD" },
            { name: "Mešano meso za dve osobe (600g)", price: "2300 RSD" },
            ],
        },
    ];
</script>

<template>
    <app-hero id="hero-welcome" size="large" image-url="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1.jpg">
        <div class="welcome-text flow">
            <h1 class="fs-primary-heading fw-bold">Dobro došli u Legendu,</h1>
            <p class="fw-semi-bold">Ranč na obali Save idealan za porodična okupljanja, slavlja i uživanje u domaćim specijalitetima.</p>
        </div>
    </app-hero>
    <section class="padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Tradicija i kvalitet idu ruku pod ruku.</h2>
                <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit, repudiandae culpa voluptas dolores necessitatibus nobis dolore accusantium molestiae ad similique maiores est dicta aliquid ipsam in numquam! Amet, voluptas.</p>
            </div>
        </div>
    </section>
    <section class="services padding-block-900 bg-primary-200">
        <div class="large-container">
            <div class="even-columns">
                <div>
                    <router-link to="/events" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-1.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">PROSLAVE</h3>
                        <p class="fw-regular">Organizujemo poslovne i porodične proslave na otvorenom, u prirodi, na otvorenom, u zatvorenom ili natkrivenom prostoru.</p>
                    </router-link>
                </div>
                <div>
                    <router-link to="/restaurant" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-2.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">RESTORAN</h3>
                        <p class="fw-regular">Restoran domaće kuhinje sa baštom, smešten u prirodnom okruženju, idealan za porodične ručkove i veće grupe.</p>
                    </router-link>
                </div>
                <div>
                    <router-link to="/birthday-parties" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/contact-1.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">DEČIJI ROĐENDANI</h3>
                        <p class="fw-regular">Organizovani rođendani na otvorenom sa životinjama, animacijom i programima prilagođenim različitim uzrastim</p>
                    </router-link>
                </div>
                <div>
                    <router-link to="/teambuilding" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/quality-2.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">TEAM BUILDING</h3>
                        <p class="fw-regular">Prostor u prirodi sa sadržajima za timske aktivnosti i korporativne skupove u Beogradu.</p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="services padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Naš meni je pažljivo kreiran.</h2>
            </div>
            <div class="menu-list" style="margin-top: 2em;">
                <div class="menu-columns">
                <article
                    v-for="(item, i) in menu[0].items"
                    :key="i"
                    class="menu-list-item"
                >
                    <div class="menu-list-item-text">
                        <span class="fw-regular">{{ item.name }}</span>
                    </div>
                    <div class="menu-list-item-price">
                        <span class="fw-bold">{{ item.price }}</span>
                    </div>
                </article>
                </div>
            </div>
            <div class="menu-action-link" style="margin-top: 2em; display: flex; align-items: center; justify-content: center;">
                <router-link to="/menu" class="button button-primary">Pogledaj</router-link>
            </div>
        </div>
    </section>
    <section class="services padding-block-900 bg-primary-200">
        <div class="container">
            <div>
                <h2 class="fs-secondary-heading fw-bold">Rezervacija proslave.</h2>
                <booking-form />
            </div>
        </div>
    </section>
</template>

<style scoped>
.services a {
    text-decoration: none;
    color: inherit;
}

.services img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    transform-origin: center center;
    transform: scale(1);
}

.services .image-overlay {
    position: relative;
    margin-bottom: var(--size-400);
    overflow: hidden;
    display: block;
}

.services .image-overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    /* background-color: rgba(0, 0, 0, .3); */
    z-index: 2;
}

a:hover .image-overlay img,
a:focus .image-overlay img {
    transform: scale(1.1);
}

@media (min-width: 50em) {
    .services img {
        height: 370px;
    }
}

.menu-columns {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: var(--size-600);
}

@media (min-width: 50em) {
    .menu-columns {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>