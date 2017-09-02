import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Album from '@/components/Album';
import Artist from '@/components/Artist';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    }, {
      path: '/artist',
      name: 'Artist',
      component: Artist
    }, {
      path: '/album',
      name: 'Album',
      component: Album
    }
  ],
});
