<script setup>
    import { AppHero } from '../components/AppHero';
</script>

<template>
    <app-hero id="hero-team-building" size="medium" image-url="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1.jpg">
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
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-13.jpg" alt="">
                    </div>
                </div>
            </div>

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
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/dishes-15.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-primary-400">
        <div class="large-container">
            <div class="even-columns">
                <div>
                    <a href="#" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/reservation-1.jpg" alt="">
                        </div>
                    </a>
                </div>
                <div class="central-column-reservation flow">
                    <h2 class="fs-secondary-heading fw-bold">LOREM, IPSUM.</h2>
                    <p class="fw-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, praesentium?</p>
                    <button class="button button-primary">Send</button>
                </div>
                <div>
                    <a href="#" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img src="https://july.finestwp.com/newwp/reston/wp-content/uploads/2024/10/reservation-2.jpg" alt="">
                        </div>
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
                        <div class="form-input">
                            <label for="name">First name</label>
                            <input type="text" name="" id="name">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-input">
                            <label for="last-name">Last name</label>
                            <input type="text" name="last-name" id="last-name">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-input">
                            <label for="phone-number">Phone number</label>
                            <input type="text" name="phone-number" id="phone-number">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-input">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-input">
                            <label for="date">Date</label>
                            <input type="text" name="date" id="date">
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-input">
                            <label for="">Message</label>
                            <input type="text" name="message" id="message">
                        </div>
                    </div>
                </div>
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