<template>
<div>
    <h1>Child Component</h1>
     <h2> {{name}} </h2>
     <h3>{{user.name}} </h3>
     <button v-on:click="getdata">call function</button>
     </div>
</template>
<script>


export default{
    name:"child1",
    props:{
        name :String,
        user:Object,
        getdata:Function,
    }

}
        
    

</script>
