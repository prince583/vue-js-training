<template>
  <div id="app">
     
    <h1>{{text}}</h1>
    <a href="/">HelloWorld</a>
    <a href="/home/root-emit"> Root Comp</a>
    <a href="/home"> Home Comp</a>
    <router-view></router-view>
    <Watchers/>
    <computed/>
    
     </div>
</template>


<script>
import computed from './components/computed.vue'
import Watchers from './components/Watchers.vue'
import firstMixin from './mixins/firstMixin.js'

//import HelloWorld from './components/HelloWorld.vue'
//import Home from './components/Home.vue'
//import databind from './components/databind.vue'
//import child from './components/child.vue'
//import child1 from './components/child1.vue'
//import rootemit from './components/rootemit.vue'
//import usingrefs from './components/usingrefs.vue'
//import employeelist from './components/employeelist.vue'
//import parent1 from './components/parent1.vue'
//import child1 from './components/child1.vue'

export default {
  name: 'App',
  mixins:[firstMixin],
  components: {
    computed,
    Watchers,
    //Home,
    //databind,
    //child,
    //child1,
    
   // usingrefs,
    //parent1,
    //child1,
   // employeelist,
  },
 data(){
    return{
      text:"",
     // title:"Child to parent Data",
     // user :{name:"shubham",email:"shubham@122.com"},
     
    }
  },
  created(){

  },
  mounted(){
    this.$parent.$on("anyfunction",this.parentEmitted);
    this.$root.$on("anyfunction",this.rootEmitted);
    
  
  // this.$root.$on("anyfunction",this.rootEmitted);
  },

 methods :{
   rootEmitted(){
     alert("Root Emitted!");
   },
   parentEmitted(){
     alert("parent emitted!");
   },
   parentCalled(){
     alert("parent called");
   },
   /* updateTitleText(title)
    {
      this.title=title
    },
    getdata(){
      console.warn("parent function called")
    },*/

 }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
