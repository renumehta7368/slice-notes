//async is function declaration
//await keyword is allowed inside the function body
//these enable asynchronous and a promise based behaviour



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
 // async and await
 async function userOperation(){
    //we use await to make it syncronous
  await createUser({
    name:'johnna',age:'45'
 })

getUsers()
   
 }
 userOperation()