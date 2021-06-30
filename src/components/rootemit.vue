<template>
    <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous">
   
   <button @click='emit' class="btn btn-large btn-primary">EmitRoot</button>
   {{"princesaini"| myUpperCase}} <br><br>
   {{"2324434"| humanDate}} <br>
    </div>
</template>
<script>
export default {
    name:"rootemit",

    filters:{
       myUpperCase(value){
           return value.toUpperCase();
       },
       humanDate(value){
           return new Date(Number(value)).toDateString();
       }
    },
    
        mounted(){
            this.$parent.$on("anyfunction",this.emitroot);
            this.$on("callparent",this.emitroot);
        },
  methods:{
   emitroot(){
        this.$root.$emit("anyfunction","anyparameter");
        //alert("done");
      },
      emitparent(){
          this.parent.$emit("anyfunction","anyparameter");
      },
      emit(){
          this.$emit("callparent","parameter");
      },
    }
    
}
</script>
<style lang="sss" scoped>

</style>