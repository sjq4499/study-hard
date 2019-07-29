import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes_config';

Vue.use(Router);

let router = new Router({
    routes
});
router.beforeEach((to, from, next) => {
    let str = window.localStorage.getItem('user');
    if (str) {
        next();
    } else {
        if (to.path === '/login') {
            next();
        } else {
            next('/login');
        }
    }
});
export default router;