import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/home/HomePage.vue';
import UsersComponent from './components/user/UsersComponent.vue';
import DriversPanel from './components/drivers/DriversPanel.vue';
import GeneralBilling from './components/Billing/GeneralBilling.vue';
import GeneralSettings from './components/Settings/GeneralSettings.vue';
import GeneralFleet from './components/Fleet/GeneralFleet.vue';
import ClientsPage from './components/Clients/ClientsPage.vue';
import liveMapPage from './components/live-map/liveMapPage.vue'
import ModeratorsPage from './components/Moderators/ModeratorsPage.vue'
import DriverDetails from './components/views/DriverDetails.vue'; 
import UserDetails from './components/views/UserDetails.vue';
import GlobalManager from './components/Manager/GlobalManager.vue';
import PageChat from './components/views/PageChat.vue'; // Импортируем компонент для чата

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
  },
  {
    path: '/chat/:id',
    name: 'PageChat',
    component: PageChat, // Исправляем название компонента на PageChat
  }, // Добавляем запятую после объекта маршрута для чата
  {
    path: '/user-details/:id',
    name: 'user-details',
    component: UserDetails,
    props: true // Замените `UserDetails` на имя вашего компонента для отображения личной информации о пользователе
  },  
  {
    path: '/driver/:id',
    name: 'driver-details',
    component: DriverDetails,
    props: true // Позволяет передавать параметры как props в компонент
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersComponent,
  },
  {
    path: '/GlobalManager',
    name: 'GlobalManager',
    component: GlobalManager,
  },
  {
    path: '/ModeratorsPage',
    name: 'ModeratorsPage',
    component: ModeratorsPage,
  },
  {
    path: '/live-map',
    name: 'live-map',
    component: liveMapPage,
  },
  {
    path: '/drivers',
    name: 'Drivers',
    component: DriversPanel,
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientsPage,
  },
  { 
    path: '/settings',
    name: 'Settings',
    component: GeneralSettings,
  },
  {
    path: '/Payments',
    name: 'Payments',
    component: GeneralFleet,
  },
  {
    path: '/Billing',
    name: 'Billing',
    component: GeneralBilling,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
