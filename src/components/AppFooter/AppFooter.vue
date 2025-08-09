<script setup></script>

<template>
    <footer>
        <div class="container footer-flex">
            <div class="two-columns">
                <div class="flow">
                    <h3 class="fs-tertiary-heading fw-bold">Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum voluptatibus rerum quasi pariatur asperiores, quae blanditiis quo consequatur repellendus aut.</p>
                </div>

                <div class="even-columns">
                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Lorem</h3>
                        <ul role="list">
                            <li class="flow-spacer-200">
                                <a href="http://">Lorem ipsum</a>
                            </li>
                            <li class="flow-spacer-200">
                                <a href="http://">Lorem ipsum</a>
                            </li>
                            <li class="flow-spacer-200">
                                <a href="http://">Lorem ipsum</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Ipsum</h3>
                        <ul role="list">
                            <li class="flow-spacer-200">
                                <a href="http://">Lorem ipsum</a>
                            </li>
                            <li class="flow-spacer-200">
                                <a href="http://">Lorem ipsum</a>
                            </li>
                            <li class="flow-spacer-200">
                                <a href="http://">Lorem ipsum</a>
                            </li>
                        </ul>
                    </div>

                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Dorem</h3>
                        <ul role="list">
                            <li class="flow-spacer-200">
                                <a href="http://">Instagram</a>
                            </li>
                            <li class="flow-spacer-200">
                                <a href="http://">Facebook</a>
                            </li>
                            <li class="flow-spacer-200">
                                <a href="http://">Tiktok</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="two-columns footer-note">
                <p>&copy; 2025 Lorem, ipsum. All rights reserved.</p>
                <p>
                <router-link to="/privacypolicy">Privacy Policy</router-link>
                &nbsp;
                <router-link to="/termsofuse">Terms of use</router-link>
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--clr-primary-100);
    color: var(--clr-primary-400);
    padding-top: var(--size-900);
    padding-bottom: var(--size-700);
}

footer .even-columns {
    gap: 2em;
}

footer p {
    max-width: 42ch;
    opacity: 0.7;
}

.two-columns {
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.footer-flex {
    display: flex;
    flex-direction: column;
    gap: 2em;
}

@media (min-width: 50em) {
    .two-columns {
        gap: unset;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
}

.footer-item ul {
    display: flex;
    flex-direction: column;
}

.footer-item ul li a {
    text-decoration: none;
    color: inherit;
    opacity: 0.7;
    position: relative;
    display: inline-block;
}

.footer-item ul li a::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--clr-accent-400);
    transition: width 0.3s ease;
}

.footer-item ul li a:hover::after,
.footer-item ul li .router-link-exact-active::after {
    width: 100%;
}

.footer-note {
    border-top: 1px solid lightgray;
    justify-content: flex-start;
    gap: 1em;
    padding-top: var(--size-500);
}

.footer-note p {
    font-size: var(--fs-300);
}

.footer-note a {
    color: inherit;
}

.footer-note a:hover {
    opacity: 0.7;
}

@media (min-width: 50em) {
    .footer-note {
        justify-content: space-between;
        align-items: center;
    }
}
</style>