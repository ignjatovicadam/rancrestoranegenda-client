<script setup>
    import { AppHero } from '../components/AppHero';
    import { ImageGallery } from '../components/ImageGallery';

    const images = [
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-1.jpg"
        },
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-2.jpg"
        },
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/quality-1.jpg"
        },
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/quality-2.jpg"
        },
        {
            url: "https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/contact-1.jpg"
        },
    ];
</script>

<template>
    <app-hero id="hero-about" size="medium" image-url="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1.jpg">
        <div class="welcome-text flow">
            <h1 class="fs-primary-heading fw-bold">Lorem ipsum dolor sit amet.</h1>
            <p class="fw-semi-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita autem nobis laborum consectetur accusamus nemo.</p>
        </div>
    </app-hero>
    <section class="padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit.</h2>
                <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit, repudiandae culpa voluptas dolores necessitatibus nobis dolore accusantium molestiae ad similique maiores est dicta aliquid ipsam in numquam! Amet, voluptas.</p>
            </div>
        </div>
    </section>
    <section class="services padding-block-900 bg-primary-200">
        <div class="large-container">
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-1.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-2.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/quality-1.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/quality-2.jpg" alt="">
                    </div>
                </div>
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/contact-1.jpg" alt="">
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
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit.</h2>
                <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde impedit, repudiandae culpa voluptas dolores necessitatibus nobis dolore accusantium molestiae ad similique maiores est dicta aliquid ipsam in numquam! Amet, voluptas.</p>
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
    /* background-color: rgba(0, 0, 0, .3); */
    z-index: 2;
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