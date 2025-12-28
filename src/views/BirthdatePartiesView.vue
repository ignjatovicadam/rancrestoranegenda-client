<script setup>
    import { BookingForm } from '../components/BookingForm';
    import ImageGallery from '../components/ImageGallery/ImageGallery.vue';

    const images = [
        {
            url: "",
        },
        {
            url: "",
        },
        {
            url: "",
        },
        {
            url: "",
        },
        {
            url: "",
        },
    ];
</script>

<template>
    <section id="birthdayparties" class="template-hero padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Dečiji rođendani</h2>
                <p class="fw-regular">Rođendani kod nas nisu samo zabava, već pravo iskustvo druženja sa životinjama i boravka u zelenilu. Deca mogu da uživaju u igri i istraživanju, dok roditelji bez žurbe i stresa uživaju u domaćoj hrani i prirodnom okruženju. Naša velika bašta, životinje i animacije stvaraju atmosferu koju mališani dugo pamte — veselu, zdravu i drugačiju od klasičnih, zatvorenih proslava.</p>
                <a href="/rancrestoranegenda-client/docs/restoranc-ranc-legenda-ponuda-proslave-2025.pdf" target="_blank" class="button button-primary">Pogledajte ponudu</a>
                <div class="template-image-preview">
                    <img src="" alt="">
                </div>
            </div>

            <div class="flow" style="margin-top: 3em;">
                <p class="fw-regular">Slavljenik/ca će zajedno sa drugarima uživati u našoj bašti prilagođenoj najmlađima! Uz svaki paket koji odaberete za proslavu uključeno je i besplatno korišćenje igrališta na otvorenom, poseta i obilazak naše farme sa životinjama, besplatan parking, profesionalna usluga, kao i neograničena konzumacija hrane i pića.</p>
                <p class="fw-regular">Svaka proslava kod nas je prilika za igru, smeh i nezaboravne uspomene u prirodnom okruženju, gde mališani mogu da istražuju, druže se i uživaju u aktivnostima dok roditelji mirno posmatraju i uživaju u svom trenutku odmora.</p>
                <p class="fw-regular">Za još više zabave i osmeha, po želji možemo obezbediti i dodatne aktivnosti poput dvorca na naduvavanje, face paint, maskote, animatora, muzičkih i sportskih igara (poligon sa preprekama, skakanje u džakovima, ledeni čika, vrući krompirići, muzičke stolice, crtanje, slikanje, nabacivanje obruča, nadvlačenje kanapa i još mnoge druge!)  Napomena: Dodatne aktivnosti vodi naš tim stručnih animatora koji se sve vreme brinu o vašim najmlađima kako biste Vi i Vaši gosti neometano uživali.</p>
            </div>
        </div>
    </section>
    <section class="services padding-block-900 bg-primary-200">
        <div class="large-container">
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img src="" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img src="" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img src="" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
            <image-gallery
                :images="images"
                style="height: 250px;"
            />
        </div>
    </section>
    <section class="padding-block-900">
        <div class="container">
            <div>
                <h2 class="fs-secondary-heading fw-bold">Rezervišite proslavu</h2>
                <booking-form />
            </div>
        </div>
    </section>
</template>

<style scoped>
    .services .even-columns {
        display: none;
    }

    .services img {
        height: 250px;
        width: 100%;
        object-fit: cover;
    }

    .services .image-overlay {
        position: relative;
        margin-bottom: var(--size-400);
    }

    .services .image-overlay::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: 2;
        background-color: rgb(226, 224, 220);
    }

    .template-image-preview {
        background-color: rgb(226, 224, 220);
    }

    @media (min-width: 50em) {
        .services .even-columns {
            display: grid;
        }

        .services img {
            height: 370px;
        }

        .services .vgo-gallery {
            display: none;
        }
    }
</style>