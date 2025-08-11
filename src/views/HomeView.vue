<script setup>
    import { ref } from 'vue';
    import { AppHero } from '../components/AppHero';
    import { InputText } from '../components/InputText';
    import { InputEmail } from '../components/InputEmail';
    import { InputCombobox } from '../components/InputCombobox';
    import { InputTextArea } from '../components/InputTextArea';

    const name = ref('');
    const lastName = ref('');
    const tel = ref('');
    const email = ref('');
    const bookingDate = ref('');
    const bookingType = ref({});
    const message = ref('');

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];
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
                <div class="form" style="margin-top: 2em">
                    <div class="form-group">
                        <input-text v-model="name" name="firstName" id="firstName" label="Name" />
                    </div>
                    <div class="form-group">
                        <input-text v-model="lastName" name="lastName" id="lastName" label="Last name" />
                    </div>
                    <div class="form-group">
                        <input-text v-model="tel" name="phoneNumber" id="phoneNumber" label="Phone number" />
                    </div>
                    <div class="form-group">
                        <input-email v-model="email" name="email" id="email" label="Email" />
                    </div>
                    <div class="form-group">
                        <input-text v-model="bookingDate" name="bookingDate" id="bookingDate" label="Booking date" />
                    </div>
                    <div class="form-group">
                        <input-combobox v-model="bookingType" name="bookingType" id="bookingType" label="Booking type" placeholder="Select type" :options="options"/>
                    </div>
                    <div class="form-group span-2">
                        <input-text-area v-model="message" name="message" id="message" label="Message" />
                    </div>
                    <div class="form-group">
                        <button class="button button-primary">Send</button>
                    </div>
                </div>
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