<script setup>
    import { BookingForm, ImageGallery } from '@/components';
    import heroImg from '@/assets/images/ranc-restoran-legenda-rodjendani-aktivnosti.webp';
    import img1 from '@/assets/images/ranc-restoran-legenda-deciji-rodjendan-igre.webp';
    import img2 from '@/assets/images/ranc-restoran-legenda-deciji-rodjendani-tobogan.webp';
    import img3 from '@/assets/images/ranc-restoran-legenda-zoo-vrt-poni.webp';
    import img4 from '@/assets/images/ranc-restoran-legenda-deciji-rodjendani-radionica-igrice.webp';
    
    const images = [
        {
            url: img1,
            description: 'Ranč restoran Legenda slika dečiji rođendani aktivnosti',
        },
        {
            url: img2,
            description: 'Ranč restoran Legenda slika dečiji rođendani tobogan',
        },
        {
            url: img3,
            description: 'Ranč restoran Legenda slika dečiji rođendani zoo vrt poni',
        },
        {
            url: img4,
            description: 'Ranč restoran Legenda slika dečiji rođendani sa radionicama',
        },
    ];
</script>

<template>
    <section id="birthdayparties" class="template-hero padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Dečiji rođendani</h2>
                <p class="fw-regular">Rođendani kod nas nisu samo zabava, već pravo iskustvo druženja sa životinjama i boravka u zelenilu. Deca mogu da uživaju u igri i istraživanju, dok roditelji bez žurbe i stresa uživaju u domaćoj hrani i prirodnom okruženju. Naša velika bašta, životinje i animacije stvaraju atmosferu koju mališani dugo pamte — veselu, zdravu i drugačiju od klasičnih, zatvorenih proslava.</p>
                <a href="/docs/restoranc-ranc-legenda-ponuda-proslave-2025.pdf" target="_blank" class="button button-primary">Pogledajte ponudu</a>
                <div class="template-image-preview">
                    <img :src="heroImg" alt="Ranč restoran Legenda slika dečji rođendani">
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
                        <img :src="img1" alt="Ranč restoran Legenda slika dečiji rođendani aktivnosti">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img :src="img2" alt="Ranč restoran Legenda slika dečiji rođendani tobogan">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img :src="img3" alt="Ranč restoran Legenda slika dečiji rođendani sa zivotinjama">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img :src="img4" alt="Ranč restoran Legenda slika dečiji rođendani sa radionicama">
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

<style src="./birthdate-parties-view.css" scoped />