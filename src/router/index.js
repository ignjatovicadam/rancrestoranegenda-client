import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RestaurantView from '../views/RestaurantView.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;