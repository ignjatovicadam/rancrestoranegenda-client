import { createRouter, createWebHistory } from 'vue-router';
import {
    HomeView,
    RestaurantView,
    TeamBuildingView,
    ContactView,
    PrivacyPolicyView,
    TermsOfUseView,
    MenuView,
    BirthdatePartiesView,
    ImportantInfoView,
    NotFoundView,
} from '@/views'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'Ranč restoran Legenda',
            description: 'Ranč na obali Save idealan za porodična okupljanja, slavlja i uživanje u domaćim specijalitetima.'
        }
    },
    {
        path: '/o-restoranu',
        name: 'Restaurant',
        component: RestaurantView,
        meta: {
            title: 'O restoranu | Ranč restoran Legenda',
            description: 'Istražite naš restoran, meni i specijalitete. Rezervišite sto danas.'
        }
    },
    {
        path: '/team-building',
        name: 'TeamBuilding',
        component: TeamBuildingView,
        meta: {
            title: 'Team Building | Ranč restoran Legenda',
            description: 'Organizujte nezaboravan team building za svoj tim.'
        }
    },
    {
        path: '/kontakt',
        name: 'Contact',
        component: ContactView,
        meta: {
            title: 'Kontakt | Ranč restoran Legenda',
            description: 'Kontaktirajte nas za rezervacije, događaje ili informacije.'
        }
    },
    {
        path: '/politika-privatnosti',
        name: 'PrivacyPolicy',
        component: PrivacyPolicyView,
        meta: {
            title: 'Politika privatnosti | Ranč restoran Legenda',
            description: 'Politika privatnosti Ranclegenda - kako štitimo vaše podatke.'
        }
    },
    {
        path: '/uslovi-koriscenja',
        name: 'TermsOfUse',
        component: TermsOfUseView,
        meta: {
            title: 'Uslovi korišćenja | Ranč restoran Legenda',
            description: 'Uslovi korišćenja.'
        }
    },
    {
        path: '/bitne-informacije',
        name: 'ImportantInfo',
        component: ImportantInfoView,
        meta: {
            title: 'Bitne informacije | Ranč restoran Legenda',
            description: 'Bitne informacije.'
        }
    },
    {
        path: '/jelovnik',
        name: 'Menu',
        component: MenuView,
        meta: {
            title: 'Meni | Ranč restoran Legenda',
            description: 'Pregledajte naš kompletan meni sa jelima.'
        }
    },
    {
        path: '/rodjendanske-zabave',
        name: 'BirthdateParties',
        component: BirthdatePartiesView,
        meta: {
            title: 'Rođendanske zabave | Ranč restoran Legenda',
            description: 'Proslavite rođendan uz nezaboravna atmosferu.'
        }
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFoundView,
        meta: {
            title: 'Stranica nije pronadjena | Ranč restoran Legenda',
            description: 'Stranica koju tražite ne postoji ili je premeštena.'
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
});

router.afterEach((to) => {
    const title = to.meta.title;
    document.title = title;

    const description = to.meta.description;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    canonicalTag.setAttribute('href', 'https://ranclegenda.com' + to.fullPath);
});

export default router;