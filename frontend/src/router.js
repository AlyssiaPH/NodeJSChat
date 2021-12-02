import VueRouter from "vue-router"
import Vue from "vue";

Vue.use(VueRouter)

const NotFound = () => import('@/view/NotFound')
const Home = () => import('@/view/Home')
const Inscription = () => import('@/view/Inscription')
// const ViewManager = () => import('@/components/ViewManager')

export default new VueRouter({
    mode : "history",
    routes :  [
        {
            path:'/inscription',
            name:'inscription',
            component: Inscription
        },
        {
            path:'/',
            name:'home',
            component: Home
        },
        {
            path: '*',
            name : 'Not Found',
            component: NotFound,
        }
    ]
})