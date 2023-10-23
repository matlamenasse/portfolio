import { createRouter, createWebHistory } from 'vue-router'


import Home from '../components/AtHome.vue'
import ProjectS from '../components/ProjectS.vue'


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
            component: ProjectS, // Associez cette route à votre vue de projet
            props: { projectTitle: 'Bio-composite Longboard',projectText:'Lorem' } // Vous pouvez transmettre des données spécifiques à chaque projet ici
          },
          {
            path: '/Low-Tech press',
            name: 'LowTechPress',
            component: ProjectS,
            props: { projectTitle: 'Low-tech Plastic Injection Press',projectText:'Lorem'  }
          },
          {
            path: '/The InHome Garden',
            name: 'InHomeGarden',
            component: ProjectS,
            props: { projectTitle: 'The InHome Garden',projectText:'Lorem' }
          }
    ]
})

export default router;

