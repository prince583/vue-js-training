import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import rootemit from './components/rootemit'
const routes=[{
    name:"helloworld",
    path:"/",
    component: HelloWorld
},
{
     name:"home",
     path:"/home",
     component: Home,
     children:[
         {
             name:"rootemit",
             path:"/root-emit",
             component: rootemit
         }
     ]

}, 
]
export default routes;