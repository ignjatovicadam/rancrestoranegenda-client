<script setup>
    import { MapPinHouse, Phone, Mail, Clock3 } from 'lucide-vue-next';
</script>

<template>
    <section id="contact-form" class="padding-block-900">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <h2 class="fs-secondary-heading fw-bold">Kontaktirajte nas</h2>
                    <p class="fw-regular">Ukoliko imate pitanja, želju za rezervacijom ili bilo kakve sugestije, slobodno nas kontaktirajte putem telefona ili e-mailom. Radujemo se vašoj poseti i trudićemo se da vaš boravak učinimo nezaboravnim.</p>
                    <div class="contact-flex">
                        <ul class="contact-list" role="list">
                            <li class="contact-list-item">
                                <MapPinHouse class="footer-icon"/>
                                <span>Obrenovački drum bb, Beograd</span>
                            </li>
                            <li class="contact-list-item">
                                <Phone/>
                                <span>Restoran rezervacije +381 64 1417 232</span>
                            </li>
                            <li class="contact-list-item">
                                <Phone/>
                                <span>Proslave +381 65 9393 557</span>
                            </li>
                            <li class="contact-list-item">
                                <Mail/>
                                <span>kontakt@ranclegenda.rs</span>
                            </li>
                        </ul>
    
                        <ul class="contact-list" role="list">
                            <li class="contact-list-item">
                                <Clock3/>
                                <span>Zimsko radno vreme sub - ned 12:00 - 20:00</span>
                            </li>
                            <li class="contact-list-item">
                                <Clock3/>
                                <span>Letnje radno vreme uto - ned 12:00 - 20:00</span>
                            </li>
                            <li class="contact-list-item">
                                <Clock3/>
                                <span>Radno vreme za proslave po dogovoru</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.407884865954!2d20.3606737!3d44.77248919999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6ef6db0a1aab%3A0x336fb62faf6f3915!2sRan%C4%8D%20Legenda%20-%20Restoran%20Legenda!5e0!3m2!1sen!2srs!4v1754298709150!5m2!1sen!2srs" style="border:0;" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    ul, p {
        margin-top: 2em;
    }

    ul li {
        display: flex;
        align-items: center;
        gap: .5em;
        margin-bottom: 1em;
    }

    li img {
        height: 20px;
        width: 20px;
    }

    .contact-flex {
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 50em) {
    .contact-flex {
        flex-direction: row;
        gap: 3em;
    }
}
</style>