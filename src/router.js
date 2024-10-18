import Vue from 'vue';
import Router from 'vue-router';
import TemplatesPage from './components/TemplatesPage.vue';
import CardPreview from './components/CardPreview.vue';
import HomePage from './components/HomePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/templates',
      name: 'TemplatesPage',
      component: TemplatesPage,
      props: route => ({ formData: route.query.formData })
    },
    {
      path: '/preview',
      name: 'CardPreview',
      component: CardPreview,
      props: route => ({ formData: route.query.formData, selectedTemplate: route.query.selectedTemplate })
    }
  ]
});
