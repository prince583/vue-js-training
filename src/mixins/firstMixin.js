import axios from 'axios'

const firstMixin={
    data(){
        return{
            users:[
            
                
            ]
        }
    },
    methods: {
        fetchUsers(){
             axios.get('https://jsonplaceholder.typicode.com/users')
               .then(response=> {
                this.users=response.data
            })
        },
         alerthello(){
            alert("hello");
         },
    }
}

export default firstMixin;