import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import RestaurantView from '../views/RestaurantView.vue';
import TeamBuildingView from '../views/TeamBuildingView.vue';

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
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;