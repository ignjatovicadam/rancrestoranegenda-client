<script setup>
    import { reactive } from 'vue';
    import { AppHero, BookingForm } from '@/components';
    import heroImg from '@/assets/images/ranc-restoran-legenda-basta-rucak.webp';
    import proslaveImg from '@/assets/images/ranc-restoran-legenda-basta-rucak-proslava.webp';
    import rodjendaniImg from '@/assets/images/ranc-restoran-legenda-proslave-deciji-rodjendani-basta.webp';
    import teamBuildingImg from '@/assets/images/ranc-restoran-legenda-proslave-team-building-aktivnost.webp';
    import restoranImg from '@/assets/images/ranc-restoran-legenda-rucak-basta-fontana.webp';

    const cache = reactive({});

    const menu = [
        {
            category: "Premium pljeskavice",
            items: [
                { 
                    name: "Gratinirani camembert",
                    description: "Zapečeni sir na tostu, sicilijanski kapar, čeri paradajz",
                    price: "1200 RSD"
                },
                { 
                    name: "Takitoksi sa aromatizovanom piletinom",
                    description: "Hrskavi tortilja zalogaj sa piletinom, tartar sos",
                    price: "1200 RSD"
                },
                { 
                    name: "Brusketi kapreze",
                    description: "Prepečeni hleb, mocarela, čeri, pesto đenoveze",
                    price: "890 RSD"
                },
                { 
                    name: "Tanjir Legenda (za dve osobe)",
                    description: "Njeguška pršuta, suva pečenica, sjenički i dapsićki sir",
                    price: "1790 RSD"
                },
                { 
                    name: "Pljeskavica Legenda (320g)",
                    description: "Punjena mladom gaudom, hrskava pančeta, jaje, crveni luk, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Čedar pljeskavica (320g)",
                    description: "Punjena čedar kockicama, topljeni čedar, crveni luk, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Pljeskavica 3 vrste sira (320g)",
                    description: "Gauda, čedar, rendani parmezan, puter, crveni luk, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Pljeskavica u sosu od tartufa (320g)",
                    description: "Sos od tartufa, parmezan, crveni luk, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Pileći paketići (300g)",
                    description: "Paketići punjeni gaudom, sos kajmak",
                    price: "1450 RSD"
                },
                { 
                    name: "Piletina čedar (300g)",
                    description: "Pileći file, topljeni čedar, hrskava slanina, vedžis krompir",
                    price: "1450 RSD"
                },
            ],
        },
    ];
</script>

<template>
    <app-hero id="hero-welcome" size="large" :image-url="heroImg">
        <div class="welcome-text flow">
            <h1 v-reveal="180" class="fs-primary-heading fw-bold">Dobro došli u Legendu,</h1>
            <p v-reveal="360" class="fw-semi-bold">Ranč na obali Save idealan za porodična okupljanja, slavlja i uživanje u domaćim specijalitetima.</p>
        </div>
    </app-hero>
    <section class="padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 v-reveal="180" class="fs-secondary-heading fw-bold">Tradicija i kvalitet idu ruku pod ruku</h2>
                <p v-reveal="220" class="fw-regular">
                    Autentičan etno restoran u kom se tradicija, ukusi domaće kuhinje i iskreno gostoprimstvo stapaju u jedinstvenu celinu. Sa dugogodišnjim iskustvom u ugostiteljstvu, kao domaćini posvećeni smo tome da svaka proslava – od malih okupljanja do velikih svečanosti – bude organizovana sa stilom i dušom.
                </p>
            </div>
        </div>
    </section>
    <section class="services padding-block-900 bg-primary-200">
        <div class="large-container">
            <div class="even-columns" style="margin-top: 2em;">
                <div v-reveal="60">
                    <a href="/docs/ranc-restoran-legenda-ponuda-letnji-period.pdf?v=2" class="flow flow-spacer-400" target="_blank">
                        <div class="image-overlay">
                            <img 
                                loading="lazy" 
                                :src="proslaveImg" 
                                alt="Ranč restoran Legenda slika bašta proslava" 
                                :class="{ 'loaded': cache[proslaveImg] }" 
                                @load="cache[proslaveImg] = proslaveImg"
                            >
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">Proslave</h3>
                        <p class="fw-regular">Organizujemo poslovne i porodične proslave na otvorenom, u prirodi, u zatvorenom ili natkrivenom prostoru.</p>
                    </a>
                </div>
                <div v-reveal>
                    <router-link to="/o-restoranu" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img 
                                loading="lazy" 
                                :src="restoranImg" 
                                alt="Ranč restoran Legenda slika bašta jelo" 
                                :class="{ 'loaded': cache[restoranImg] }" 
                                @load="cache[restoranImg] = restoranImg"
                            >
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">Restoran</h3>
                        <p class="fw-regular">Restoran domaće kuhinje sa baštom, smešten u prirodnom okruženju, idealan za porodične ručkove i veće grupe.</p>
                    </router-link>
                </div>
                <div v-reveal>
                    <router-link to="/rodjendanske-zabave" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img 
                                loading="lazy" 
                                :src="rodjendaniImg" 
                                alt="Ranč restoran Legenda slika dečji rođendani" 
                                :class="{ 'loaded': cache[rodjendaniImg] }" 
                                @load="cache[rodjendaniImg] = rodjendaniImg"
                            >
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">Dečiji rođendani</h3>
                        <p class="fw-regular">Organizovani rođendani na otvorenom sa životinjama, animacijom i programima <br>prilagođenim različitim uzrastima</p>
                    </router-link>
                </div>
                <div v-reveal>
                    <router-link to="/team-building" class="flow flow-spacer-400">
                        <div class="image-overlay">
                            <img 
                                loading="lazy" 
                                :src="teamBuildingImg" 
                                alt="Ranč restoran Legenda slika timske aktivnosti" 
                                :class="{ 'loaded': cache[teamBuildingImg] }" 
                                @load="cache[teamBuildingImg] = teamBuildingImg"
                            >
                        </div>
                        <h3 class="fs-tertiary-heading fw-bold">Team building</h3>
                        <p class="fw-regular">Prostor u prirodi sa sadržajima za timske aktivnosti i korporativne skupove u Beogradu.</p>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
    <section class="services padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 v-reveal="60" class="fs-secondary-heading fw-bold">Naš meni je pažljivo kreiran</h2>
            </div>
            <div class="menu-list" style="margin-top: 2em;">
                <div class="menu-columns">
                <article
                    v-for="(item, i) in menu[0].items"
                    :key="i"
                    class="menu-list-item"
                >
                    <div class="menu-list-item-text">
                        <span class="fw-regular">{{ item.name }}</span>
                        <span class="fw-regular menu-list-item-description">{{ item.description }}</span>
                    </div>
                    <div class="menu-list-item-price">
                        <span class="fw-bold">{{ item.price }}</span>
                    </div>
                </article>
                </div>
            </div>
            <div class="menu-action-link" style="margin-top: 2em; display: flex; align-items: center; justify-content: center;">
                <router-link to="/jelovnik" class="button button-primary">Pogledajte detaljnije</router-link>
            </div>
        </div>
    </section>
    <section id="formular" class="services padding-block-900 bg-primary-200">
        <div class="container">
            <div>
                <h2 v-reveal="60" class="fs-secondary-heading fw-bold">Rezervišite proslavu</h2>
                <booking-form />
            </div>
        </div>
    </section>
</template>

<style src="./home-view.css" scoped />