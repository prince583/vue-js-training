<template>
<div>
<h1> Welcome in Computed properties in VUE JS </h1>
  <h2>{{getResult}}</h2>
  <h2>{{getResult}}</h2>
  <h2>{{getResult}}</h2>
  <h2>{{getResult}}</h2>
</div>
</template>
<script>
export default {
      name: "computed",
      data()
      {
          return{
              dollors:100,
              rupeeVal:20,
              discount:10,
          }
      },
      computed:{
          getResult()
          {
             return (this.dollors*this.rupeeVal)-this.discount;
          }
      }
}
</script>