<script setup>
    import { MapPinHouse, Phone, Mail } from 'lucide-vue-next';
</script>

<template>
    <footer>
        <div class="container footer-flex">
            <div class="two-columns">
                <div>
                    <h3 class="fs-tertiary-heading fw-bold">Restoran ranč Legenda</h3>
                    <p style="margin-top: 2em; margin-bottom: 1rem;">Hvala vam što ste nas posetili. Rezervacije su moguće putem sajta ili telefonom</p>

                    <div class="footer-contact-information">
                        <div class="footer-contact-informatio-item">
                            <MapPinHouse class="footer-icon"/>
                            <a href="https://maps.app.goo.gl/z85q5vDQtKzKKGCJ6" target="_blank">
                                <span class="footer-contact-description">Obrenovački drum bb, Beograd</span>
                            </a>
                        </div>
                        <div class="footer-contact-informatio-item">
                            <Phone class="footer-icon"/>
                            <span class="footer-contact-description">+381 64 1417 232 / +381 65 9393 557</span>
                        </div>
                        <div class="footer-contact-informatio-item">
                            <Mail class="footer-icon"/>
                            <span class="footer-contact-description">kontakt@ranclegenda.rs</span>
                        </div>
                    </div>
                </div>

                <div class="even-columns">
                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Restoran</h3>
                        <ul role="list">
                            <li class="flow-spacer-200"><router-link to="/kontakt">Kontakt</router-link></li>
                            <li class="flow-spacer-200"><router-link to="/o-restoranu">Restoran</router-link></li>
                            <li class="flow-spacer-200"><router-link to="/jelovnik">Jelovnik</router-link></li>
                        </ul>
                    </div>

                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Proslave</h3>
                        <ul role="list">
                            <li class="flow-spacer-200"><router-link to="/team-building">Team building</router-link></li>
                            <li class="flow-spacer-200"><router-link to="/rodjendanske-zabave">Dečiji rođendani</router-link></li>
                        </ul>
                    </div>

                    <div class="footer-item flow">
                        <h3 class="fs-tertiary-heading fw-bold">Prati nas</h3>
                        <ul role="list">
                            <li class="flow-spacer-200">
                                <a href="https://www.instagram.com/legenda_ranc/" target="_blank">Instagram</a>
                            </li>
                            <li class="flow-spacer-200">
                                <a href="https://www.facebook.com/ranclegenda/?locale=sr_RS" target="_blank">Facebook</a>
                            </li>
                            <li class="flow-spacer-200">
                                <a href="https://www.tiktok.com/@restoranlegenda" target="_blank">Tiktok</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="two-columns footer-note">
                <p>&copy; 2025 Restoran ranč Legenda. Sva prava zadržana.</p>
                <p>
                <router-link to="/politika-privatnosti">Politika privatnosti</router-link>
                &nbsp;
                <router-link to="/uslovi-koriscenja">Uslovi korišćenja</router-link>
                &nbsp;
                <router-link to="/bitne-informacije">Bitne informacije</router-link>
                </p>
            </div>
        </div>
    </footer>
</template>

<style src="./app-footer.css" scoped></style>