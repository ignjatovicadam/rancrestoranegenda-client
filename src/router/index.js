import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RestaurantView from '../views/RestaurantView.vue';
import TeamBuildingView from '../views/TeamBuildingView.vue';
import ContactView from '../views/ContactView.vue';
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue';
import TermsOfUseView from '../views/TermsOfUseView.vue';
import BrunchView from '../views/BrunchView.vue';
import EventsView from '../views/EventsView.vue';
import MenuView from '../views/MenuView.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/about',
        name: 'About',
        component: AboutView,
    },
    {
        path: '/restaurant',
        name: 'Restaurant',
        component: RestaurantView,
    },
    {
        path: '/teambuilding',
        name: 'TeamBuilding',
        component: TeamBuildingView,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactView,
    },
    {
        path: '/privacypolicy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicyView,
    },
    {
        path: '/termsofuse',
        name: 'TermsOfUse',
        component: TermsOfUseView,
    },
    {
        path: '/brunch',
        name: 'Brunch',
        component: BrunchView,
    },
    {
        path: '/events',
        name: 'Events',
        component: EventsView,
    },
    {
        path: '/menu',
        name: 'Menu',
        component: MenuView,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router;