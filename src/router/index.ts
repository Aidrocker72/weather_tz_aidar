import HomePage from '@/components/HomePage.vue';
import WeatherWeekPage from '@/components/WeatherWeekPage.vue';
import { createMemoryHistory, createRouter } from 'vue-router';

const routes = [
  { 
    path: '/', 
    component: HomePage, 
    name: 'home' 
  },
  {
    path: '/week',
    component: WeatherWeekPage,
    name: 'week'
  }
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});