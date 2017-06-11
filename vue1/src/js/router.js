/**
 * Created by 源 on 2017/6/7.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import keys from '../key.vue'
Vue.use(VueRouter);
const Tian = { template: '<div name="fade">Providence</div>' };
// const key = { template: '<div>Tianya</div>' };
const see = { template: '<div name="fade">see--看<router-view></router-view></div>' };
const Bar = { template: '<div name="fade">Traces of dreams  {{ $route.params.id }}</div>' };
const heaven = { template: '<div name="slide">天空{{ $route.params.heaven }}</div>' }
const movie = { template: '<div name="fade">神奇女侠</div>' };

const router = new VueRouter({
  routes: [
    { path: '/', component: Tian },
    { path: '/Bar/:id', component: Bar },
    { path: '/key/:num', component: keys },
    { path: '/see', component: see,
      children: [
        { path: ':heaven', name: 'heaven', component: heaven }
      ]
    },
    { 
      path: '/movie/:ait', component: movie ,
       beforeRouteUpdate (to) {
          // console.log($route.params.ait)
      }
    }
  ]
})

export default router;
