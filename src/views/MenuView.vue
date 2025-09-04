<script setup>
    const menu = [
        {
            category: "Hladna predjela",
            items: [
            { name: "Njeguška pršuta (100g)", price: "690 RSD" },
            { name: "Goveđa pečenica (100g)", price: "690 RSD" },
            { name: "Kulen (100g)", price: "690 RSD" },
            { name: "Zlatiborski sir (100g)", price: "350 RSD" },
            { name: "Gauda (100g)", price: "450 RSD" },
            { name: "Bucani sir (100g)", price: "690 RSD" },
            { name: "Tanjir Legenda (za dve osobe)", price: "1700 RSD" },
            ],
        },
        {
            category: "Topla predjela",
            items: [
            { name: "Smočani kačamak (za dve osobe)", price: "1490 RSD" },
            { name: "Riblji čvarci", price: "750 RSD" },
            { name: "Grilovano povrće", price: "450 RSD" },
            { name: "Pečurke na žaru", price: "450 RSD" },
            { name: "Tapasi sa piletinom", price: "750 RSD" },
            { name: "Brusketi 'Legenda'", price: "590 RSD" },
            ],
        },
        {
            category: "Supe i čorbe",
            items: [
            { name: "Paradajz čorba", price: "350 RSD" },
            { name: "Riblja čorba", price: "490 RSD" },
            { name: "Pileća čorba", price: "450 RSD" },
            { name: "Teleća čorba", price: "490 RSD" },
            { name: "Potaž od šargarepe i đumbira", price: "390 RSD" },
            { name: "Potaž od vrganja", price: "390 RSD" },
            ],
        },
        {
            category: "Salate",
            items: [
            { name: "Šopska", price: "440 RSD" },
            { name: "Srpska", price: "410 RSD" },
            { name: "Paradajz", price: "350 RSD" },
            { name: "Paradajz sa sirom", price: "440 RSD" },
            { name: "Miks zelenih salata", price: "450 RSD" },
            { name: "Kupus", price: "350 RSD" },
            { name: "Vitaminska", price: "390 RSD" },
            { name: "Ljuta papričica u ulju", price: "250 RSD" },
            { name: "Ljuta papričica sveža", price: "90 RSD" },
            { name: "Prolećna salata", price: "450 RSD" },
            { name: "Bašta salata", price: "690 RSD" },
            ],
        },
        {
            category: "Obrok salate",
            items: [
            { name: "Cezar salata", price: "1100 RSD" },
            { name: "Salata sa tunjevinom", price: "890 RSD" },
            { name: "Grčka salata", price: "790 RSD" },
            ],
        },
        {
            category: "Jela sa roštilja",
            items: [
            { name: "Ćevapi juneći (300g)", price: "1200 RSD" },
            { name: "Pljeskavica juneća (300g)", price: "1200 RSD" },
            { name: "Gurmanska pljeskavica (300g)", price: "1300 RSD" },
            { name: "Gurmanski uštipci (300g)", price: "1300 RSD" },
            { name: "Pileći file (300g)", price: "950 RSD" },
            { name: "Pileći ražnjići rol. slaninicom (300g)", price: "1200 RSD" },
            { name: "Rebarca na kajmaku (300g)", price: "1200 RSD" },
            { name: "Svinjski vrat na žaru (300g)", price: "1050 RSD" },
            { name: "Kobasica (300g)", price: "1100 RSD" },
            { name: "Bela vešalica (300g)", price: "1100 RSD" },
            { name: "Rolovana punjena bela vešalica (300g)", price: "1500 RSD" },
            { name: "Mešano meso za dve osobe (600g)", price: "2300 RSD" },
            ],
        },
        {
            category: "Jela po porudžbini",
            items: [
            { name: "Piletina na povrću", price: "1100 RSD" },
            { name: "Pileći medaljoni u sosu od pečuraka", price: "1500 RSD" },
            { name: "Piletina u sosu od pršute", price: "1300 RSD" },
            { name: "Rižoto sa piletinom i povrćem", price: "990 RSD" },
            { name: "Taljatele pesto piletina", price: "1100 RSD" },
            ],
        },
        {
            category: "Gurmanski meni",
            items: [
            { name: "Mejillas de toro (Juneći obrazi)", price: "1900 RSD" },
            { name: "Colas de toro (Juneći repovi)", price: "1800 RSD" },
            { name: "Teletina ispod sača", price: "1800 RSD" },
            { name: "Svinjska plećka ispod sača", price: "1500 RSD" },
            ],
        },
        {
            category: "Dodaci",
            items: [
            { name: "Pomfrit", price: "350 RSD" },
            { name: "Začinski krompir", price: "350 RSD" },
            { name: "Kajmak", price: "150 RSD" },
            { name: "Lepinja", price: "150 RSD" },
            ],
        },
        {
            category: "Dezerti",
            items: [
            { name: "Bajadera", price: "450 RSD" },
            { name: "Slatka pita", price: "380 RSD" },
            { name: "Krempita", price: "450 RSD" },
            ],
        },
        {
            category: "Riba i morski plodovi",
            items: [
            { name: "Som (1kg)", price: "3000 RSD" },
            { name: "Smuđ (1kg)", price: "3900 RSD" },
            { name: "Fileti smuđa (300g)", price: "2500 RSD" },
            { name: "Dimljena pastrmka filet (300g)", price: "1500 RSD" },
            { name: "Šaran (1kg)", price: "3500 RSD" },
            { name: "Lignje (300g)", price: "1900 RSD" },
            { name: "Pohovane lignje (300g)", price: "2200 RSD" },
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
    <section id="menu" class="template-hero padding-block-900">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Ukusi koji ostavljaju trag.</h2>
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
                </div>
                <div class="menu-list-item-price">
                <span class="fw-bold">{{ item.price }}</span>
                </div>
            </article>
            </div>
        </div>
    </section>
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