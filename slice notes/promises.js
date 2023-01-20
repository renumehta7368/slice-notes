// promises is the objects that represents the
// eventual(something will happen at the end called eventual) complition
// and faliure of async operation
//in the traditional callback
//we pass function inside function
// but in promises we attach a callback to the promises object


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
    return new Promise((resolve, reject) =>  {

    
    setTimeout(() => {
users.push(user)
const error = true
if(!error){
    resolve()
}else{
    reject('error:something is wrong')
}

    }, 2000)
})
}
 console.log(createUser({
    name:'johnathan',
    age:'46'

 }).then(getUsers)
 //.then(() =>  console.log('getPosts'))
.catch(error => console.log(error))
.finally(() => console.log ('finally method ran'))
 )

