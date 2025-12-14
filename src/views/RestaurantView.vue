<script setup>
    import { reactive } from 'vue';
    import { AppHero } from '../components/AppHero';
    import { ImageGallery } from '../components/ImageGallery';

    const cache = reactive({});

    const upperImages = [
        {
            url: "/rancrestoranegenda-client/OTVORENI_DEO_1-2.jpeg"
        },
        {
            url: "/rancrestoranegenda-client/OTVORENI_DEO_2-2.jpeg"
        },
    ];

    const downImages = [
        {
            url: "/rancrestoranegenda-client/ZATVORENI_DEO_1_STR_RESTORAN-2.jpeg"
        },
        {
            url: "/rancrestoranegenda-client/ZARVORENI_DEO_2_STR_RESTORAN-2.jpeg"
        },
    ];
</script>


<template>
    <app-hero id="hero-restaurant" size="medium" image-url="/rancrestoranegenda-client/STRANA_RESTORAN_GLAVNA_GORE_SLIKA_SKRATI_JE_MALO_SLOBODNO_GORE_I_DOLE-2.jpeg">
        <div class="welcome-text flow">
            <h1 class="fs-primary-heading fw-bold">Restoran Legenda</h1>
            <p class="fw-semi-bold">Nalazi se u hladu velikih vrba, na površini zemljišta od jednog hektara, okružen rekom sa čak 3 strane, sa igralištem na otvorenom i farmom sa domaćim životinjama.</p>
        </div>
    </app-hero>
    <section class="restaurant padding-block-900">
        <div class="container">
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="/OTVORENI_DEO_1-2.jpeg" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img class="" src="/OTVORENI_DEO_2-2.jpeg" alt="">
                    </div>
                </div>
            </div>

            <image-gallery
                :images="upperImages"
                style="height: 250px;"
            />

            <div class="flow description-text">
                <h2 class="fs-secondary-heading fw-bold">Otvoreni deo</h2>
                <p class="fw-regular">
                    Otvoreni deo se nalazi u prirodnom hladu velikih vrba, na površini od jednog hektara, potpuno okružen zelenilom i rekom sa čak tri strane.
                </p>
                <p class="fw-regular flow-spacer-200">
                    Ovaj prostor je osmišljen kao mesto za beg od gradske gužve i svakodnevnice, gde posetioci mogu da uživaju u miru, tišini i lepoti prirode.
                </p>
                <p class="fw-regular flow-spacer-200">
                    U okviru prostora nalazi se igralište na otvorenom, idealno za decu svih uzrasta, kao i farma sa domaćim životinjama koje deca mogu da vide, nahrane i upoznaju.
                </p>
            </div>
        </div>
    </section>
    <section class="restaurant padding-block-900 bg-primary-200">
        <div class="container">
            <div class="flow description-text">
                <h2 class="fs-secondary-heading fw-bold">Zatvoreni deo</h2>
                <p class="fw-regular">
                    Restoran je uređen u autentičnom etno stilu i ima tri funkcionalno opremljene sale.
                </p>
                <p class="fw-regular flow-spacer-200">
                    Prostor je pogodan za različite događaje — od korporativnih proslava i timskih okupljanja do privatnih svečanosti.
                </p>
                <p class="fw-regular flow-spacer-200">
                    Sve sale su klimatizovane, grejane i opremljene kompletnim inventarom, uz fleksibilan raspored stolova i stolica prema potrebama klijenata.
                </p>
                <p class="fw-regular flow-spacer-200">
                    Enterijer spaja tradicionalni ambijent sa savremenim komforom, pružajući prijatan i organizaciono prilagodljiv prostor tokom cele godine.
                </p>
            </div>

            <image-gallery
                :images="downImages"
                style="height: 250px;"
            />
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="/ZATVORENI_DEO_1_STR_RESTORAN-2.jpeg" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img class="" src="/ZARVORENI_DEO_2_STR_RESTORAN-2.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Naš meni je pažljivo kreiran</h2>
                <p class="fw-regular">
                    Već dugi niz godina negujemo filozofiju zasnovanu na kvalitetu i autentičnosti.
                </p>
                <p class="fw-regular flow-spacer-200">
                    Koristimo isključivo pažljivo odabrane proizvode sa jasno definisanim geografskim poreklom. Verujemo da prava svežina i bogatstvo ukusa dolaze iz pažljivog odabira namirnica.
                </p>
                <p class="fw-regular flow-spacer-200">
                    Naš jelovnik oblikovan je oko proverenih sastojaka — od domaće jagnjetine i sveže ribe iz obližnjih reka, do mlečnih proizvoda i lokalnog povrća.
                </p>
                <p class="fw-regular flow-spacer-200">
                    Svako jelo je bogato ukusom i pripremljeno sa posebnom pažnjom. Na taj način čuvamo tradiciju, pružamo raznovrsnost i garantujemo vrhunski kvalitet svakog obroka koji poslužujemo.
                </p>
            </div>
        </div>
    </section>
</template>

<style scoped>
.restaurant .even-columns {
    display: none;
}

.restaurant a {
    text-decoration: none;
    color: inherit;
}

.restaurant img {
    height: 250px;
    width: 100%;
    object-fit: cover;
}

.restaurant .image-overlay, .promo-link .image-overlay {
    position: relative;
}

.restaurant .image-overlay::before, .promo-link .image-overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, .2);
    z-index: 2;
}

@media (min-width: 50em) {
    .restaurant img {
        height: 350px;
    }

    .restaurant .even-columns {
        display: grid;
    }

    .restaurant .vgo-gallery {
        display: none;
    }
}

.restaurant .container {
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.restaurant .container .even-columns {
    flex-basis: 50%;
}

@media (min-width: 50em) {
    .restaurant .container {
        display: flex;
        justify-content: space-between;
        gap: 3em;
        align-items: center;
        flex-direction: row;
    }

    .restaurant .container .even-columns {
        flex-basis: 50%;
    }

    .description-text {
        flex-basis: 50%;
    }
}
</style>