<script setup></script>

<template>
    <section id="contact-form" class="padding-block-900">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <h2 class="fs-secondary-heading fw-bold">Kontaktirajte nas</h2>
                    <p class="fw-regular">Ukoliko imate pitanja, želju za rezervacijom ili bilo kakve sugestije, slobodno nas kontaktirajte putem telefona ili e-mailom. Radujemo se vašoj poseti i trudićemo se da vaš boravak učinimo nezaboravnim.</p>
                    <ul class="contact-list" role="list">
                        <li class="contact-list-item">
                            <img src="/ranc-restoran-legenda-ikonica-email.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                            <span>lorem.ipsum@gmailcom</span>
                        </li>
                        <li class="contact-list-item">
                            <img src="/ranc-restoran-legenda-ikonica-telefon.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                            <span>+381 65 31 24 189</span>
                        </li>
                        <li class="contact-list-item">
                            <img src="/ranc-restoran-legenda-ikonica-lokacija.svg" alt="Restoran Ranč Legenda Ikonica Lokacija" />
                            <span>Obrenovacki drum bb</span>
                        </li>
                    </ul>
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
</style>