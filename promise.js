function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error=true;
                        if(!error){
                console.log("your promise has been resolved")
                resolve();
            }
            else{
                console.log("your promise has notbeen resolved")
                reject("sorry not fullfilled")
            }
        }, 3000);
    })
}
function fun2(){
 return func1().then(function(){
    console.log("Thanks for resolving")
}).catch(data=>{
    console.log(data);return data
})
}
fun2().then((data)=>{
    console.log("fun2 "+data)
})
console.log("Hello")