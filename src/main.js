import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'


const app= createApp(App)
app.use(router)
app.use(ElementPlus)

app.use(store)
app.mount('#app')
// createApp(App).use(store).use(router).mount('#app')
