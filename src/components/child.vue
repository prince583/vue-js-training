<template>
    <div>
        <button v-on:click="updatetitle">update title</button>
    </div>
</template>
<script>

export default {
    name: "child",
    methods:{
        updatetitle(){
            this.$emit('changeTitle',"props has been changed")
        }
    }
    
        
    
}
</script>
