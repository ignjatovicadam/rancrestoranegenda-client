<script setup>
    import { AppHero } from '../components/AppHero';
    import { BookingForm } from '../components/BookingForm';

    const menu = [
        {
            category: "Premium pljeskavice",
            items: [
                { 
                    name: "Gratinirani camembert",
                    description: "Zapečeni sir na tostu, sicilijanski kapar, čeri paradajz",
                    price: "1200 RSD"
                },
                { 
                    name: "Takitoksi sa aromatizovanom piletinom",
                    description: "Hrskavi tortilja zalogaj sa piletinom, tartar sos",
                    price: "1200 RSD"
                },
                { 
                    name: "Brusketi kapreze",
                    description: "Prepečeni hleb, mocarela, čeri, pesto đenoveze",
                    price: "890 RSD"
                },
                { 
                    name: "Tanjir Legenda (za dve osobe)",
                    description: "Njeguška pršuta, suva pečenica, sjenički i dapsićki sir",
                    price: "1790 RSD"
                },
                { 
                    name: "Pljeskavica Legenda (320g)",
                    description: "Punjena mladom gaudom, hrskava pančeta, jaje, crveni luk, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Čedar pljeskavica (320g)",
                    description: "Punjena čedar kockicama, topljeni čedar, crveni luk, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Pljeskavica 3 vrste sira (320g)",
                    description: "Gauda, čedar, rendani parmezan, puter, crveni luk, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Pljeskavica u sosu od tartufa (320g)",
                    description: "Sos od tartufa, parmezan, crveni luk, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Pileći paketići (300g)",
                    description: "Paketići punjeni gaudom, sos kajmak",
                    price: "1450 RSD"
                },
                { 
                    name: "Piletina čedar (300g)",
                    description: "Pileći file, topljeni čedar, hrskava slanina, vedžis krompir",
                    price: "1450 RSD"
                },
            ],
        },
    ];
</script>

<template>
    <app-hero id="hero-welcome" size="large" image-url="/rancrestoranegenda-client/STRANA_RESTORAN_GLAVNA_GORE_SLIKA_SKRATI_JE_MALO_SLOBODNO_GORE_I_DOLE-2.jpeg">
        <div class="welcome-text flow">
            <h1 class="fs-primary-heading fw-bold">Dobro došli u Legendu,</h1>
            <p class="fw-semi-bold">Ranč na obali Save idealan za porodična okupljanja, slavlja i uživanje u domaćim specijalitetima.</p>
        </div>
    </app-hero>
    <section class="padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Tradicija i kvalitet idu ruku pod ruku</h2>
                <p class="fw-regular">Autentičan etno restoran gde se tradicija,
                    ukusi domaće kuhinje i iskreno gostoprimstvo
                    stapaju u nezaboravno iskustvo. Sa dugogodišnjim
                    iskustvom, kao domaćini, posvećeni smo tome da
                    svaka proslava – od malih okupljanja do velikih
                    svečanosti – bude organizovana sa stilom i dušom.
                </p>
            </div>
        </div>
    </section>
    <section class="services padding-block-900 bg-primary-200">
        <div class="large-container">
            <div class="even-columns">
                <div>
                    <router-link to="/events" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="/OTVORENI_DEO_2-2.jpeg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">PROSLAVE</h3>
                        <p class="fw-regular">Organizujemo poslovne i porodične proslave na otvorenom, u prirodi, na otvorenom, u zatvorenom ili natkrivenom prostoru.</p>
                    </router-link>
                </div>
                <div>
                    <router-link to="/restaurant" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="/RESTORAN_-_POGLEDAJTE_I_-_LEVA_SLIKA-2.jpeg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">RESTORAN</h3>
                        <p class="fw-regular">Restoran domaće kuhinje sa baštom, smešten u prirodnom okruženju, idealan za porodične ručkove i veće grupe.</p>
                    </router-link>
                </div>
                <div>
                    <router-link to="/birthday-parties" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="/dec_ro_ova_obaveznoo-2.jpeg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">DEČIJI ROĐENDANI</h3>
                        <p class="fw-regular">Organizovani rođendani na otvorenom sa životinjama, animacijom i programima prilagođenim različitim uzrastim</p>
                    </router-link>
                </div>
                <div>
                    <router-link to="/teambuilding" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="/IMG_6253_1-2.jpg" alt="">
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
                <h2 class="fs-secondary-heading fw-bold">Naš meni je pažljivo kreiran</h2>
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
                        <span class="fw-regular menu-list-item-description">{{ item.description }}</span>
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
                <h2 class="fs-secondary-heading fw-bold">Rezervacija proslave</h2>
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
    height: 350px;
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
    background-color: rgba(0, 0, 0, 0.2);
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