
// problem with callback is
//////inversion of control
/////callback hell because it is hard to maintain



const div=document.querySelector('div')
const  users =[
    {name:'john',age:'20'},
    {name :'peter', age:'30' }
]
 function getUsers () {
    //imitate asynchronous behaviour
    setTimeout(() => {
      let result =  ''
      users.forEach((user,index)=>
      {
        result = result + `<li>${user.name}</li>`
      })
      console.log(result)
      div.innerHTML = result
    },1000)

}
function createUser(user,callback){
    //imitate asyncronous behaviour
    setTimeout(() => {
users.push(user)
callback()
    }, 2000)
}
 getUsers()
 createUser({
    name:'johnathan',
    age:'46'

 },getUsers)