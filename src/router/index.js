import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateBlog from '../views/createBlog.vue'
import Allblogs from '../views/allblogs.vue'
import Contact from '../views/contact.vue'
import Signin from '../views/signIn.vue'
import Signup from '../views/signUp.vue'
import Fullpost from '../views/fullpost.vue'
import Fullblog from '../views/fullblog.vue'
import Notfound from '../views/notfound.vue'



const routes = [
  { path: '/', component: Home },
  { path: '/create', component: CreateBlog },
  { path: '/allblogs', component: Allblogs },
  { path: '/contact', component: Contact },
  { path: '/signin', component: Signin },
  { path: '/fullpost/:author', component: Fullpost },
  { path: '/fullblog/:id', component: Fullblog },
  { path: '/signup', component: Signup },
  { path: '/:catchAll(.*)', redirect:Notfound},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
