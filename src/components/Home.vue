<template>
<div>
    <h1> Hello From Home Component </h1>
    <users/>
    <h2>{{data}}</h2>
    <h2>{{msg}}</h2>
    <h3>{{name}}</h3>
    <button v-on:click="intro">Call intro function</button>
    <button v-on:click="resetinfo">Click me</button>
    <h4 v-if="num=4"> welcome in if statemet in vue js</h4>
    <h3>welcome for loop in vue.js</h3>
    <h5 class="styleclass"> Class and Style Bindings</h5>
    <h5 v-bind:style="{color:'blue'}">Style Bindings</h5>
    <h6 v-bind:class="{display:true}">Class binding with objects</h6>
       <table border="1px">
           <tr>
               <td>ID</td>
               <td>Name</td>
               <td>Email</td>
            </tr>
            <tr v-for="user in users " :key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
            </tr>
      </table>      
 </div>   
</template>
<script>
import users from './users'
export default {
    name : "Home",
    components :{users},
    props:{
        data:String,
        msg:String
    },methods:{
        intro()
        {
            console.log("welcome in events");
        },
        resetinfo(){
            this.name="prince";
        }
    },   
            data(){
        return{
            name : "rahul",
            num : 4,
            users :[
                {id:1,name:"prince",email:"prince@123"},
                 {id:2,name:"ajay",email:"ajay@123"},
                  {id:3,name:"vijay",email:"vijaye@123"},
                   {id:4,name:"shubham",email:"shubham@123"}
            ],

            
        
        }
    }

};
</script>
<style scoped>
.styleclass{
    color :blueviolet;
}
.display{
    background-color: brown;

}
</style>