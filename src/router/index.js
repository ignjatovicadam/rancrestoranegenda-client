import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RestaurantView from '../views/RestaurantView.vue';
import TeamBuildingView from '../views/TeamBuildingView.vue';
import ContactView from '../views/ContactView.vue';
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue';
import TermsOfUseView from '../views/TermsOfUseView.vue';
import MenuView from '../views/MenuView.vue';
import BirthdatePartiesView from '../views/BirthdatePartiesView.vue';
import ImportantInfoView from '../views/ImportantInfoView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: {
            title: 'Restoran ranč Legenda',
            description: 'Ranč na obali Save idealan za porodična okupljanja, slavlja i uživanje u domaćim specijalitetima.'
        }
    },
    {
        path: '/o-restoranu',
        name: 'Restaurant',
        component: RestaurantView,
        meta: {
            title: 'O restoranu | Restoran ranč Legenda',
            description: 'Istražite naš restoran, meni i specijalitete. Rezervišite sto danas.'
        }
    },
    {
        path: '/team-building',
        name: 'TeamBuilding',
        component: TeamBuildingView,
        meta: {
            title: 'Team Building | Restoran ranč Legenda',
            description: 'Organizujte nezaboravan team building za svoj tim.'
        }
    },
    {
        path: '/kontakt',
        name: 'Contact',
        component: ContactView,
        meta: {
            title: 'Kontakt | Restoran ranč Legenda',
            description: 'Kontaktirajte nas za rezervacije, događaje ili informacije.'
        }
    },
    {
        path: '/politika-privatnosti',
        name: 'PrivacyPolicy',
        component: PrivacyPolicyView,
        meta: {
            title: 'Politika privatnosti | Restoran ranč Legenda',
            description: 'Politika privatnosti Ranclegenda - kako štitimo vaše podatke.'
        }
    },
    {
        path: '/uslovi-koriscenja',
        name: 'TermsOfUse',
        component: TermsOfUseView,
        meta: {
            title: 'Uslovi korišćenja | Restoran ranč Legenda',
            description: 'Uslovi korišćenja.'
        }
    },
    {
        path: '/bitne-informacije',
        name: 'ImportantInfo',
        component: ImportantInfoView,
        meta: {
            title: 'Bitne informacije | Restoran ranč Legenda',
            description: 'Bitne informacije.'
        }
    },
    {
        path: '/jelovnik',
        name: 'Menu',
        component: MenuView,
        meta: {
            title: 'Meni | Restoran ranč Legenda',
            description: 'Pregledajte naš kompletan meni sa jelima.'
        }
    },
    {
        path: '/rodjendanske-zabave',
        name: 'BirthdateParties',
        component: BirthdatePartiesView,
        meta: {
            title: 'Rođendanske zabave | Restoran ranč Legenda',
            description: 'Proslavite rođendan uz nezaboravna atmosferu.'
        }
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFoundView,
        meta: {
            title: 'Stranica nije pronadjena | Restoran ranč Legenda',
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
});

export default router;