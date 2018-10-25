import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue'

Vue.use(VueRouter)

// const Bar = { template: '<div>Página Não encontrada <router-link to="/">Go to Foo</router-link></div>' }

/* const routes = [
  { path: '/', component: () => import('./App.vue') },
  { path: '/bar', component: Bar }
]
 */
const routes = [
  {
    path: '/',
    component: () => import('./layouts/Principal.vue'),
    children: [
      { path: '', component: () => import('./pages/Home.vue') },
      { path: 'about', component: () => import('./pages/About.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('./pages/error.vue')
  })
}

export default routes

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
