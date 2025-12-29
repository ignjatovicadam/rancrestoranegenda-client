<script setup>
    import { AppHero } from '../components/AppHero';
    import { BookingForm } from '../components/BookingForm';
    import { GridGallery } from '../components/GridGallery';
    import { AccordionButton, AccordionPanel, useAccordion } from '../components/Accordion';

    const { active, toggle } = useAccordion('single');
</script>

<template>
    <app-hero id="hero-team-building" size="medium" image-url="/rancrestoranegenda-client/IMG_6237-2.jpg">
        <div class="welcome-text flow">
            <h1 class="fs-primary-heading fw-bold">Učvrstite timske veze</h1>
            <p class="fw-semi-bold">Team building park u okviru Ranča Legenda pruža jedinstveno iskustvo za timove koji žele da se povežu, opuste i provedu dan van kancelarije — u prirodnom okruženju.</p>
        </div>
    </app-hero>
    <section class="restaurant padding-block-900">
        <div class="container">
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="" alt="">
                    </div>
                </div>
            </div>

            <div class="flow description-text">
                <h2 class="fs-secondary-heading fw-bold">Zamislite dan u prirodi</h2>
                <p class="fw-regular">Gde se posao pretvara u druženje, a kolege postaju pravi tim. U Legendi organizujemo team building koji spaja rekreaciju, igru i dobru energiju. Umesto klasičnih formata, nudimo nezaboravna iskustva – od aktivnosti koje bude takmičarski duh, do trenutaka mira i povezivanja u prirodnom okruženju.</p>
            </div>
        </div>
    </section>
    <section class="restaurant padding-block-900 bg-primary-200">
        <div class="container">
            <div class="flow description-text">
                <h2 class="fs-secondary-heading fw-bold">Da sve bude potpuno</h2>
                <p class="fw-regular">Tu je i naša trpeza – jela pripremljena u profesionalnoj kuhinji od pažljivo biranih namirnica. Kod nas vas očekuju ukusi koji spajaju tradiciju i moderan pristup gastronomiji.</p>
                <p class="fw-regular">U Legendi verujemo da pravi team building nije samo skup aktivnosti već prilika da se ljudi povežu, opuste i stvore zajedničke uspomene. Naša zelena oaza u srcu grada pruža savršen ambijent da izađete iz kancelarije i zakoračite u svet igre, smeha i druženja.</p>
            </div>
            <div class="even-columns">
                <div>
                    <div class="image-overlay">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="padding-block-900">
        <div class="container">
            <div class="">
                <div class="flow description-text">
                    <h2 class="fs-secondary-heading fw-bold">Timske aktivnosti</h2>
                </div>
                <div class="description-text" style="margin-top: 2em;">
                    <div class="accordion-list">
                        <div>
                            <div class="accordion-item flow-spacer-400">
                                <accordion-button :open="active === 'accordion-panel-1'" @click="toggle('accordion-panel-1')">Kvizomanija</accordion-button>
                                <accordion-panel :open="active === 'accordion-panel-1'">
                                    <span class="menu-list-item-description">Okrenite svet naopačke uz pomoć pijanih naočara, objasnite kolegama pojmove bez glasa i pantomime, prisetite se pesama iz mladosti i omiljenih filmova.</span>
                                </accordion-panel>
                            </div>
                            <div class="accordion-item flow-spacer-400">
                                <accordion-button :open="active === 'accordion-panel-2'" @click="toggle('accordion-panel-2')">Pivska olimpijada</accordion-button>
                                <accordion-panel :open="active === 'accordion-panel-2'">
                                    <span class="menu-list-item-description">Testiraćemo vašu spretnost, izdržljivost, a na kraju i kapacitet u ispijanju piva.</span>
                                </accordion-panel>
                            </div>
                            <div class="accordion-item flow-spacer-400">
                                <accordion-button :open="active === 'accordion-panel-3'" @click="toggle('accordion-panel-3')">Igre bez granica</accordion-button>
                                <accordion-panel :open="active === 'accordion-panel-3'">
                                    <span class="menu-list-item-description">Postavlja se jedan ili više poligona sa istim igrama koje vode 1-2 animatora po poligonu. Oni daju instrukcije, kontrolišu pravilnost i mere vreme tokom takmičenja. Timovi prolaze igre jednu za drugom, animatori mere vreme radi rangiranja po završetku događaja.</span>
                                </accordion-panel>
                            </div>
                            <div class="accordion-item flow-spacer-400">
                                <accordion-button :open="active === 'accordion-panel-4'" @click="toggle('accordion-panel-4')">Cornhole</accordion-button>
                                <accordion-panel :open="active === 'accordion-panel-4'">
                                    <span class="menu-list-item-description">Zabavna timska igra u kojoj učesnici bacanjem platnenih vrećica pokušavaju da pogode otvor na drvenoj tabli, razvijajući pritom preciznost i takmičarski duh.</span>
                                </accordion-panel>
                            </div>
                        </div>
                        <div>
                            <div class="accordion-item flow-spacer-400">
                                <accordion-button :open="active === 'accordion-panel-5'" @click="toggle('accordion-panel-5')">Trka rimskih dvokolica</accordion-button>
                                <accordion-panel :open="active === 'accordion-panel-5'">
                                    <span class="menu-list-item-description">Učesnici dobijaju potreban materijal i pravljenje dvokolice može da počne. Zajedničkim radom i komunikacijom timovi prave autentičnu dvokolicu baš kao iz Starog Rima. Kada se izgradnja završi, ekipe su slobodne da ukrase svoja kola sa različitim bojama i motivima. Nakon toga sledi defile svih dvokolica, gde će svaki tim ponosno pokazati svoje delo i svoja obeležja.</span>
                                </accordion-panel>
                            </div>
                            <div class="accordion-item flow-spacer-400">
                                <accordion-button :open="active === 'accordion-panel-6'" @click="toggle('accordion-panel-6')">Streličarstvo</accordion-button>
                                <accordion-panel :open="active === 'accordion-panel-6'">
                                    <span class="menu-list-item-description">Jedinstveno iskustvo gađanja meta u okviru našeg parka.</span>
                                </accordion-panel>
                            </div>
                            <div class="accordion-item flow-spacer-400">
                                <accordion-button :open="active === 'accordion-panel-7'" @click="toggle('accordion-panel-7')">XO takmičenje</accordion-button>
                                <accordion-panel :open="active === 'accordion-panel-7'">
                                    <span class="menu-list-item-description">Igra iks-oks na poseban način.</span>
                                </accordion-panel>
                            </div>
                            <div class="accordion-item flow-spacer-400">
                                <accordion-button :open="active === 'accordion-panel-8'" @click="toggle('accordion-panel-8')">Seoska olimpijada</accordion-button>
                                <accordion-panel :open="active === 'accordion-panel-8'">
                                    <span class="menu-list-item-description">Seoska olimpijada sadržaj.</span>
                                </accordion-panel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="padding-block-900 bg-primary-200">
        <div class="container">
            <div class="flow">
                <h2 class="fs-secondary-heading fw-bold">Family day u legendi</h2>
                <p class="fw-regular">Zamislite team building koji ne zaustavlja priču na kolegama – već se pretvara u pravi porodični dan na otvorenom. <br>U Legendi smo kreirali koncept Family Day upravo za to: zaposleni mogu povesti supružnike, decu i četvoronožne ljubimce, pa se ceo događaj pretvara u iskreno druženje i opuštanje za sve generacije.</p>
            </div>

            <div style="margin-top: 2em;">
                    <grid-gallery :images="[
                        { url: '', lqip: '', },
                        { url: '', lqip: '', },
                        { url: '', lqip: '', },
                        { url: '', lqip: '', },
                        { url: '', lqip: '', },
                    ]">
                    </grid-gallery>
                </div>

            <div class="flow" style="margin-top: 3em;">
                <h3 class="fs-tertiary-heading fw-bold fw-bold">Na prostranom ranču,</h3>
                <p class="fw-regular">Tik uz reku i u društvu naših životinja, najmlađi dobijaju svoj poseban svet igre i zabave. Dok odrasli uživaju u aktivnostima sa kolegama ili jednostavno predahnu uz hranu i piće iz naše kuhinje, decu čekaju dvorac na naduvavanje, face painting, trke u džakovima, susret sa mađioničarem i mnoštvo drugih igara na otvorenom. Celo imanje postaje njihovo igralište, puno smeha, uzbuđenja i novih uspomena, gde mogu uživati u druženju i igrama i sa roditeljima i sa drugarima.</p>
                <p class="fw-regular">Sve je obezbeđeno – od ukusne hrane i osveženja, do bezbednog prostora za igru i organizovanog programa. Rezultat? Dok se zaposleni zbližavaju u opuštenoj atmosferi, njihova deca provode nezaboravan dan u prirodi, a supružnici uživaju u druženju i odmoru.</p>
                <p class="fw-regular">Legenda je jedan od retkih restorana u Beogradu, ako ne i jedini, koji nudi ovakav spoj team buildinga i porodičnog dana na otvorenom. Zato vaš događaj kod nas postaje više od okupljanja – on postaje iskustvo koje okuplja kolektiv, porodice i prijatelje na jednom mestu, stvarajući uspomene o kojima će se dugo pričati.</p>
            </div>
        </div>
    </section>
    <section class="services padding-block-900">
        <div class="container">
            <div>
                <h2 class="fs-secondary-heading fw-bold">Rezervišite proslavu</h2>
                <booking-form />
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

.accordion-list {
    display: grid;
    grid-template-columns: 1fr;
}

.image-overlay {
    background-color: rgb(226, 224, 220);
}

@media (min-width: 50em) {
    .accordion-list {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
}

.accordion-item {
    box-shadow: 2.5px 4.33px 15px 0px rgba(0, 0, 0, 0.09);
    margin-bottom: 1.5em;
}
</style>