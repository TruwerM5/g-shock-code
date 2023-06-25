import { createWebHashHistory, createRouter } from "vue-router";
import Index from '../views/Index.vue';
import Catalog from '../views/Catalog.vue';
import History from '../views/History.vue';
import SingleProduct from '../views/SingleProduct.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
 { path: '/', component: Index, alias: ['/home', '/index'], meta: {title: 'G-SHOCK'}   },
 { path: '/catalog', component: Catalog, meta: {title: 'G-SHOCK | ALL WATCHES'}  },
 { path: '/history', component: History, meta: {title: 'G-SHOCK | HISTORY'}  },
 { path: '/products/:name', component: SingleProduct, meta: { title: 'G-SHOCK | SINGLE PRODUCT' } },
 { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: {title: 'NotFound'} }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {top : 0}
    }
});

router.beforeEach((to, from, next) => {
    if(!to.path.includes('/prod'))
        document.title = to.meta.title;
    next();
})

export default router;