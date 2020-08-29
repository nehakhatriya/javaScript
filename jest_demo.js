const axios= require('axios')
const functions= {
    add: function(num1,num2) 
           {return num1+num2},
    isNull: ()=> null  ,
    createUser: ()=>{
        let user={
            firstName:'zayn', secondName:'malik'
        }
        return user
    },
    fetchUser: ()=>{ return axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res=> res.data).catch(err=> 'error')
    }
}

module.exports=functions