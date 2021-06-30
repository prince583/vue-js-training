import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';
//import myMixin from './mixins/firstMixin'

Vue.config.productionTip = false

Vue.use(VueRouter);
//Vue.mixin(myMixin);
//Vue.extend({
 // mixins: [myMixin]
//});

const router=new VueRouter({
  mode: "history",
  routes: routes

});

new Vue({
  //mixins: [myMixin],
  router,
  render: h => h(App),
}).$mount('#app')
