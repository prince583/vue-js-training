<template>
<div>
  <h1> Watchers in vue js </h1>
  <h2>{{count}}</h2>
  <button v-on:click="count=count+1">+</button><br><br>
  <button v-on:click="count=count-1">-</button>
</div>
</template>
<script>
export default {
    name:"Watchers",
    data()
    {
        return{
            count:0
        
        }
    }

}

</script>