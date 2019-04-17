// Vue Routers 
const routes = [
    { path: '/', component: AppSplashScreen },
    { path: '/login', component: Login },
    { path: '/tipo', component: Tipo },
    { path: '/cadastro', component: Cadastro },
    { path: '/regiao', component: Regiao },
    { path: '/entregas', component: Entregas },


    // App com footer e header

    { path: '/app/main', component: Main }, 
    { path: '/app/perfil', component: Main } 

    
];

const router = new VueRouter({
    routes: routes
}); 

const app = new Vue({
    router
}).$mount('#app');

