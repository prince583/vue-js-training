<template>
    <div>
        <h1>Databinding</h1>
        {{message}}
        <input type="text" v-model="message">
    </div>
</template>

<script>
export default{
    name : "databind",
    data(){
        return{
            message:"Hello"
        }
    }
}
</script>
