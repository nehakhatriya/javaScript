let cleanRoom= function(){
    return new Promise(function(resolve,reject){
        resolve(" cleaned room ")
    })
}

let removeGarbage=function(msg){
    return new Promise(function(resolve,reject){
    resolve(msg+" removed garbage ")
    })
}

let iceCream=function(msg){
  return new Promise(function(resolve,reject){
      return resolve(msg +" can have ice cream ")
  })
}
async function run(){
  let clean= await cleanRoom()
  let garbage= await removeGarbage(clean)
  let ice= await iceCream(garbage)
  console.log("finished "+ice)
}
run().then(()=>console.log("finally finished")).catch((data)=>console.log(data))

// cleanRoom().then(function(result){
//     return removeGarbage(result)
// }).then(function(result){
//     return iceCream(result)
// }).then (function(result){
//     console.log("finished"+result)
// })

//Promise.all([cleanRoom(),removeGarbage(),iceCream()]).then(function(){
//     console.log("all finished")
// })

//Promise.race([cleanRoom(),removeGarbage(),iceCream()]).then(function(){
//     console.log("all finished")
// })
