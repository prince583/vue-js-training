<template>
    <div>
        <childrefs ref="childrefs" />
        {{message}}
        </div>
</template>
<script >
import childrefs from './components/childrefs.vue'
export default{
    name:"usingrefs.vue",
    data(){
        return{
            message:"",

        }
    },
    components: {
        childrefs,
    },
    mounted() {
        this.message=this.$refs.childrefs.myText;
        console.log(this.$refs.childrefs);
    }


}
</script>