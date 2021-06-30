//*<template>
    <div><h1>Employee List</h1>
    <div>
        <table border="1px">
            <tr>
                <td>Name</td>
                 <td>Salary</td>
                  <td>Age</td>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
            <td>Name</td>
            <td>Salary</td>
            <td>Age</td>
            </tr>
            </table>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios'
import axios from 'axios';
Vue.use(VueAxios,axios)
export default {
    name : "employeelist",
    data()
    {
        return{
            list:undefined
        }
    },
    mounted()
    {
        vue.axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response=>{
            this.list=response.data.data
            console.warn(response.data.data)
        })
    }
}
</script>