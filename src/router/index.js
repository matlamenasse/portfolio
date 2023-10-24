import { createRouter, createWebHistory } from 'vue-router'


import Home from '../components/AtHome.vue'
import Longboard from '../components/LongboarD.vue'
import InHome from '../components/InHomeGarden.vue'
import PlasticInjector from '../components/PlasticInjector.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'AtHome',
            component: Home
          },
          {
            path: '/Longboard',
            name: 'Longboard',
            component: Longboard
          },
          {
            path: '/InHomeGarden',
            name: 'InHomeGarden',
            component: InHome
          },
          {
            path: '/InjectionPress',
            name: 'Injection press',
            component: PlasticInjector
          },
         
    ]
})

export default router;

