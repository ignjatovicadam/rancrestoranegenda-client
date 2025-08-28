<script setup>
    import { AppHero } from '../components/AppHero';
    import { BookingForm } from '../components/BookingForm';
    import { ImageGallery } from '../components/ImageGallery';

    const upperImages = [
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-1.jpg"
        },
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-2.jpg"
        },
    ];

    const downImages = [
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-1.jpg"
        },
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-2.jpg"
        },
    ];
</script>


<template>
    <app-hero id="hero-restaurant" size="medium" image-url="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1.jpg">
        <div class="welcome-text flow">
            <h1 class="fs-primary-heading fw-bold">Lorem ipsum dolor sit amet.</h1>
            <p class="fw-semi-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem nobis laborum consectetur accusamus nemo.</p>
        </div>
    </app-hero>
    <section class="restaurant padding-block-900">
        <div class="container">
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-1.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img class="" src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-2.jpg" alt="">
                    </div>
                </div>
            </div>

            <image-gallery
                :images="downImages"
                style="height: 250px;"
            />

            <div class="flow description-text">
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit.</h2>
                <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit, repudiandae culpa voluptas dolores necessitatibus nobis dolore accusantium molestiae ad similique maiores est dicta aliquid ipsam in numquam! Amet, voluptas.</p>
            </div>
        </div>
    </section>
    <section class="restaurant padding-block-900 bg-primary-200">
        <div class="container">
            <div class="flow description-text">
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit.</h2>
                <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit, repudiandae culpa voluptas dolores necessitatibus nobis dolore accusantium molestiae ad similique maiores est dicta aliquid ipsam in numquam! Amet, voluptas.</p>
            </div>

            <image-gallery
                :images="downImages"
                style="height: 250px;"
            />
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-1.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img class="" src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="services padding-block-900">
        <div class="container">
            <div>
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit.</h2>
                <booking-form />
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

.restaurant .image-overlay {
    position: relative;
    margin-bottom: var(--size-400);
}

.restaurant .image-overlay::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, .3);
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