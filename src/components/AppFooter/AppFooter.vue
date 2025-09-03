<script setup></script>

<template>
    <footer>
        <div class="container footer-flex">
            <div class="two-columns">
                <div>
                    <h3 class="fs-tertiary-heading fw-bold">Restoran-Ranč Legenda.</h3>
                    <p style="margin-top: 2em;">Hvala vam što ste nas posetili. Rezervacije su moguće putem sajta ili telefonom.</p>

                    <div class="footer-contact-information" style="margin-top: 1.5em;">
                        <div class="footer-contact-informatio-item">
                            <img src="/ranc-restoran-legenda-ikonica-lokacija.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                            <span class="footer-contact-description">Obrenovacki drum bb</span>
                        </div>
                        <div class="footer-contact-informatio-item">
                            <img src="/ranc-restoran-legenda-ikonica-telefon.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                            <span class="footer-contact-description">+381 65 31 24 189</span>
                        </div>
                        <div class="footer-contact-informatio-item">
                            <img src="/ranc-restoran-legenda-ikonica-email.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                            <span class="footer-contact-description">lorem.ipsum@gmailcom</span>
                        </div>
                    </div>
                </div>

                <div class="even-columns">
                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Restoran</h3>
                        <ul role="list">
                            <li class="flow-spacer-200"><router-link to="/restaurant">Restoran</router-link></li>
                            <li class="flow-spacer-200"><router-link to="/menu">Jelovnik</router-link></li>
                        </ul>
                    </div>

                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Proslave</h3>
                        <ul role="list">
                            <li class="flow-spacer-200"><router-link to="/events">Proslave</router-link></li>
                            <li class="flow-spacer-200"><router-link to="/teambuilding">Team building</router-link></li>
                            <li class="flow-spacer-200"><router-link to="/">Dečiji rođendani</router-link></li>
                        </ul>
                    </div>

                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Prati nas</h3>
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
                <p>&copy; 2025 Restoran-Ranč Legenda. Sva prava zadržana.</p>
                <p>
                <router-link to="/privacypolicy">Polisa privatnosti</router-link>
                &nbsp;
                <router-link to="/termsofuse">Uslovi korišćenja</router-link>
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

.footer-contact-information {
    display: flex;
    flex-direction: column;
    gap: .1em;
}

.footer-contact-description {
    font-size: var(--fs-300);
    opacity: 0.7;
}

.footer-contact-informatio-item {
    display: flex;
    align-items: center;
    gap: .35em;
}

.footer-contact-informatio-item img {
    width: 15px;
    height: 15px;
}

@media (min-width: 50em) {
    .footer-contact-information {
        flex-direction: row;
        gap: .7em;
    }
}
</style>