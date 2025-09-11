<script setup>
    import { AppHero } from '../components/AppHero';
    import { BookingForm } from '../components/BookingForm';
</script>

<template>
    <app-hero id="hero-team-building" size="medium" image-url="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1.jpg">
        <div class="welcome-text flow">
            <h1 class="fs-primary-heading fw-bold">Team building u Legendi</h1>
            <p class="fw-semi-bold">Team building park u okviru Ranča Legenda pruža jedinstveno iskustvo za timove koji žele da se povežu, opuste i provedu dan van kancelarije — u prirodnom okruženju.</p>
        </div>
    </app-hero>
    <section class="restaurant padding-block-900">
        <div class="container">
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-13.jpg" alt="">
                    </div>
                </div>
            </div>

            <div class="flow description-text">
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit</h2>
                <p class="fw-regular">Kompletan program, od sadržaja do hrane i usluge, u potpunosti prilagođavamo vašim potrebama i ciljevima. Bilo da želite dinamične timske igre, kreativne radionice, animaciju ili jednostavno opuštanje u prirodi uz odlično posluženje, naš tim brine da svaki detalj bude na nivou.</p>
            </div>
        </div>
    </section>
    <section class="restaurant padding-block-900 bg-primary-200">
        <div class="container">
            <div class="flow description-text">
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit</h2>
                <p class="fw-regular">Prostor, sadržaji i organizacija osmišljeni su tako da podrže sve vrste timskih okupljanja — od neformalnih druženja do strukturiranih programa — uz potpunu fleksibilnost i profesionalnu podršku.</p>
            </div>
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-15.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="restaurant padding-block-900">
        <div class="container"></div>
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
.central-column-reservation {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    color: var(--clr-primary-100);
}
</style>