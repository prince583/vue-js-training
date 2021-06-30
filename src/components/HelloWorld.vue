<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <table>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company name</th>
          </tr>
          <tr v-for="user in this.users" :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td>{{user.Phone}}</td>
            <td>{{user.company.name}}</td>
          </tr>
        </table>
        <button v-on:click="alerthello">say hello</button>
      </v-col>
    </v-row>
  </v-container>
    
</template>

<script>
import firstMixin from '../mixins/firstMixin.js'

export default {
  name:'HelloWorld',
  mixins:[firstMixin],
  //props: {
    //msg: String
  //}
  data: ()=> ({

  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
