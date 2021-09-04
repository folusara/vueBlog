import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateBlog from '../views/createBlog.vue'
import Allblogs from '../views/allblogs.vue'
import Contact from '../views/contact.vue'
import Notfound from '../views/notfound.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreateBlog },
  { path: '/allblogs', component: Allblogs },
  { path: '/contact', component: Contact },
  { path: '/:catchAll(.*)', redirect:Notfound},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
