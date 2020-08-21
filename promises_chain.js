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

cleanRoom().then(function(result){
    return removeGarbage(result)
}).then(function(result){
    return iceCream(result)
}).then (function(result){
    console.log("finished"+result)
})

//Promise.all([cleanRoom(),removeGarbage(),iceCream()]).then(function(){
//     console.log("all finished")
// })

//Promise.race([cleanRoom(),removeGarbage(),iceCream()]).then(function(){
//     console.log("all finished")
// })
