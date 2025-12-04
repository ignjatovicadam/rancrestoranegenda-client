<script setup>
    const menu = [
        {
            category: "Hladna predjela",
            items: [
                { name: "Njeguška pršuta (100g)", price: "690 RSD" },
                { name: "Goveđa pečenica (100g)", price: "690 RSD" },
                { name: "Svinjska pečenica (100g)", price: "690 RSD" },
                { name: "Dapsićki sir (100g)", price: "590 RSD" },
                { name: "Sjenički sir (100g)", price: "590 RSD" },
                { name: "Dimljena suva tuna (100g)", price: "1550 RSD" },
                { name: "Tatar biftek (250g)", price: "2200 RSD" },
                { 
                    name: "Tanjir Legenda (za dve osobe)",
                    description: "Njeguška pršuta, suva pečenica, sjenički i dapsićki sir",
                    price: "1790 RSD"
                },
            ],
        },
        {
            category: "Topla predjela",
            items: [
                { name: "Pohovani kačkavalj", price: "950 RSD" },
                { name: "Grilovano povrće", price: "650 RSD" },
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
            ],
        },
        {
            category: "Čorbe",
            items: [
                { name: "Riblja čorba", price: "490 RSD" },
                { name: "Teleća čorba", price: "490 RSD" },
            ],
        },
        {
            category: "Salate",
            items: [
                { name: "Šopska", price: "440 RSD" },
                { name: "Srpska", price: "410 RSD" },
                { name: "Paradajz", price: "350 RSD" },
                { name: "Krastavac", price: "300 RSD" },
                { name: "Paradajz sa sirom", price: "440 RSD" },
                { name: "Zelena salata", price: "350 RSD" },
                { name: "Kupus", price: "390 RSD" },
                { name: "Vitaminska", price: "440 RSD" },
                { name: "Ljuta papričica u ulju", price: "250 RSD" },
                { name: "Ljuta papričica sveža", price: "130 RSD" },
                { name: "Bašta salata (za dve osobe)", price: "790 RSD" },
            ],
        },
        {
            category: "Obrok salate",
            items: [
                { name: "Cezar salata", price: "1190 RSD" },
                { name: "Salata sa tunjevinom", price: "1190 RSD" },
                { name: "Grčka salata", price: "990 RSD" },
            ],
        },
        {
            category: "Ekstra prilozi",
            items: [
                { name: "Hleb", price: "150 RSD" },
                { name: "Pomfrit", price: "400 RSD" },
                { name: "Vedžis krompir", price: "450 RSD" },
                { name: "Kajmak kugla (100g)", price: "350 RSD" },
                { name: "Kečap", price: "60 RSD" },
                { name: "Senf", price: "60 RSD" },
                { name: "Marinada", price: "120 RSD" },
                { name: "Dalmatinsko varivo", price: "400 RSD" },
            ],
        },
        {
            category: "Jela sa roštilja",
            description: "Prilog uz sva jela je pomfrit.",
            items: [
                { name: "Juneći ćevapi (300g)", price: "1290 RSD" },
                { name: "Juneći ćevapi na kajmaku (300g)", price: "1440 RSD" },
                { name: "Pljeskavica na žaru (300g)", price: "1290 RSD" },
                { name: "Pljeskavica na kajmaku (300g)", price: "1440 RSD" },
                { name: "Svinjski file na žaru (300g)", price: "1390 RSD" },
                { name: "Marinirani pileći file (300g)", price: "1190 RSD" },
                { name: "Pileći ražnjići rolovani slaninicom (300g)", price: "1500 RSD" },
                { name: "Svinjski vrat na žaru (300g)", price: "1300 RSD" },
                { name: "Domaća kobasica (300g)", price: "1250 RSD" },
                { 
                    name: "Mešano meso za dve osobe (600g)",
                    description: "Ćevapi, kobasica, pileći ražnjići, svinjski vrat",
                    price: "2800 RSD"
                },
            ],
        },
        {
            category: "Premium pljeskavice",
            items: [
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
            ],
        },
        {
            category: "Premium piletina",
            items: [
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
                { name: "Piletina 3 vrste sira i vedžis (300g)", price: "1450 RSD" },
            ],
        },
        {
            category: "Jela po porudžbini",
            items: [
                { 
                    name: "Cepkani svinjski vrat u demiglasu (300g)",
                    description: "Sporo pečeni vrat u komadu, vedžis krompir",
                    price: "1750 RSD"
                },
                { 
                    name: "Kranči piletina (300g)",
                    description: "Hrskava piletina u panko prezli, tartar sos, pomfrit",
                    price: "1350 RSD"
                },
                { 
                    name: "Klasik biftek (300g)",
                    description: "Povrće i puter",
                    price: "3500 RSD"
                },
                { 
                    name: "Biftek u sosu od tartufa (300g)",
                    description: "Vedžis krompir",
                    price: "3800 RSD"
                },
                { name: "Juneći gulaš (400g)", price: "1390 RSD" },
                { name: "Teletina Legenda (300g)", price: "2700 RSD" },
                { name: "Svinjski file u sosu od pečuraka (300g)", price: "1500 RSD" },
            ],
        },
        {
            category: "Riba i morski plodovi",
            description: "Prilog uz sva jela je dalmatinsko varivo.",
            items: [
                { name: "Smuđ (1kg)", price: "4200 RSD" },
                { name: "Smuđ polutke (1kg)", price: "6500 RSD" },
                { name: "Som (1kg)", price: "4100 RSD" },
                { name: "Losos fileti (300g)", price: "2100 RSD" },
                { name: "Dimljena pastrmka filet (300g)", price: "1700 RSD" },
                { name: "Brancin fileti (300g)", price: "1850 RSD" },
                { name: "Dimljeni šaran polutka (300g)", price: "1850 RSD" },
                { name: "Lignje (300g)", price: "2100 RSD" },
            ],
        },
        {
            category: "Dezerti",
            items: [
                { name: "Bajadera", price: "490 RSD" },
                { name: "Krempita", price: "490 RSD" },
                { name: "Trileće", price: "440 RSD" },
                { 
                    name: "Sladoled",
                    description: "Vanila, pistać, malina, jogurt-višnja, stracciatella",
                    price: "430 RSD"
                },
            ],
        },
    ];


    const scrollToSection = (index) => {
    const el = document.getElementById("category-" + index);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };
</script>

<template>
    <div class="menu-page-wrapper">
        <section id="menu" class="template-hero padding-block-900">
            <div class="container">
                <div class="flow">
                    <h2 class="fs-secondary-heading fw-bold">Ukusi koji ostavljaju trag</h2>
                    <p class="fw-regular">Uživajte u pažljivo pripremljenim jelima od svežih namirnica, tradicionalnim specijalitetima i gurmanskim poslasticama koje osvajaju na prvi zalogaj.</p>
                </div>
    
                <ul role="list">
                    <li v-for="(section, index) in menu" :key="index">
                        <a href="#" @click.prevent="scrollToSection(index)">{{ section.category }}</a>
                        <span v-if="index !== menu.length - 1">/</span>
                    </li>
                </ul>
            </div>
        </section>
        <section
            v-for="(section, index) in menu"
            :id="'category-' + index"
            :key="index"
            class="menu-section padding-block-700"
            >
            <div class="container">
                <h3 class="fs-tertiary-heading fw-bold">{{ section.category }}</h3>
    
                <div class="menu-columns">
                <article
                    v-for="(item, i) in section.items"
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
        </section>
    </div>
</template>

<style scoped>
.menu-list:not(:last-of-type) {
    margin-bottom: 8em;
}

.menu-section {
    scroll-margin-top: 80px
}

.menu-columns {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: var(--size-600);
}

@media (min-width: 50em) {
    .menu-columns {
        grid-template-columns: repeat(2, 1fr);
    }
}

section:nth-of-type(2n) {
    background-color: var(--clr-primary-200);
}

ul[role="list"] {
    display: flex;
    flex-wrap: wrap;
    gap: .5em;
    padding: 0;
    margin-top: 5rem;
}

ul[role="list"] li {
    margin-bottom: 1em;
    display: flex;
    gap: .5em;
}

ul[role="list"] li a {
    text-decoration: none;
    font-weight: 500;
    color: inherit;
}

ul[role="list"] li a:hover {
    opacity: .7;
}
</style>