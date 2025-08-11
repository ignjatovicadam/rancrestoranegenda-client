<script setup>
    import { AppHero } from '../components/AppHero';
    import { BookingForm } from '../components/BookingForm';
</script>

<template>
    <app-hero id="hero-welcome" size="large" image-url="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1.jpg">
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
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit.</h2>
            </div>
            <div class="menu-list" style="margin-top: 2em;">
                <div class="even-columns">
                    <div>
                        <div class="menu-list-item">
                            <div class="menu-list-item-text">
                                <h3 class="fs-tertiary-heading fw-bold">Lorem, ipsum.</h3>
                                <span class="fw-regular">Chicken / Apple / Tomatoes</span>
                            </div>
                            <div class="menu-list-item-price">
                                <span class="fw-bold">$11.05</span>
                            </div>
                        </div>
                        <div class="menu-list-item">
                            <div class="menu-list-item-text">
                                <h3 class="fs-tertiary-heading fw-bold">Lorem, ipsum.</h3>
                                <span class="fw-regular">Chicken / Apple / Tomatoes</span>
                            </div>
                            <div class="menu-list-item-price">
                                <span class="fw-bold">$11.05</span>
                            </div>
                        </div>
                        <div class="menu-list-item">
                            <div class="menu-list-item-text">
                                <h3 class="fs-tertiary-heading fw-bold">Lorem, ipsum.</h3>
                                <span class="fw-regular">Chicken / Apple / Tomatoes</span>
                            </div>
                            <div class="menu-list-item-price">
                                <span class="fw-bold">$11.05</span>
                            </div>
                        </div>
                        <div class="menu-list-item">
                            <div class="menu-list-item-text">
                                <h3 class="fs-tertiary-heading fw-bold">Lorem, ipsum.</h3>
                                <span class="fw-regular">Chicken / Apple / Tomatoes</span>
                            </div>
                            <div class="menu-list-item-price">
                                <span class="fw-bold">$11.05</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="menu-list-item">
                            <div class="menu-list-item-text">
                                <h3 class="fs-tertiary-heading fw-bold">Lorem, ipsum.</h3>
                                <span class="fw-regular">Chicken / Apple / Tomatoes</span>
                            </div>
                            <div class="menu-list-item-price">
                                <span class="fw-bold">$11.05</span>
                            </div>
                        </div>
                        <div class="menu-list-item">
                            <div class="menu-list-item-text">
                                <h3 class="fs-tertiary-heading fw-bold">Lorem, ipsum.</h3>
                                <span class="fw-regular">Chicken / Apple / Tomatoes</span>
                            </div>
                            <div class="menu-list-item-price">
                                <span class="fw-bold">$11.05</span>
                            </div>
                        </div>
                        <div class="menu-list-item">
                            <div class="menu-list-item-text">
                                <h3 class="fs-tertiary-heading fw-bold">Lorem, ipsum.</h3>
                                <span class="fw-regular">Chicken / Apple / Tomatoes</span>
                            </div>
                            <div class="menu-list-item-price">
                                <span class="fw-bold">$11.05</span>
                            </div>
                        </div>
                        <div class="menu-list-item">
                            <div class="menu-list-item-text">
                                <h3 class="fs-tertiary-heading fw-bold">Lorem, ipsum.</h3>
                                <span class="fw-regular">Chicken / Apple / Tomatoes</span>
                            </div>
                            <div class="menu-list-item-price">
                                <span class="fw-bold">$11.05</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="menu-action-link" style="margin-top: 2em; display: flex; align-items: center; justify-content: center;">
                <router-link to="/menu" class="button button-primary">Discover more</router-link>
            </div>
        </div>
    </section>
    <section class="services padding-block-900">
        <div class="large-container">
            <div class="even-columns">
                <div>
                    <a href="#" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-1.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">LOREM, IPSUM.</h3>
                        <p class="fw-regular">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, rem?</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-2.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">LOREM, IPSUM.</h3>
                        <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, numquam.</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/quality-1.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">LOREM, IPSUM.</h3>
                        <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, praesentium?</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/quality-2.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">LOREM, IPSUM.</h3>
                        <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, voluptas!</p>
                    </a>
                </div>
                <div>
                    <a href="#" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/contact-1.jpg" alt="">
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">LOREM, IPSUM.</h3>
                        <p class="fw-regular">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, itaque.</p>
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section class="services padding-block-900 bg-primary-200">
        <div class="container">
            <div>
                <h2 class="fs-secondary-heading fw-bold">Lorem ipsum dolor sit.</h2>
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
</style>