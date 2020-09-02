const logger=require ('./promise-logger')
function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error=true;
                        if(!error){
                console.log("your promise has been resolved")
                resolve();
            }
            else{
                logger.info('error has been occured')
                console.log("your promise has notbeen resolved")
                reject("sorry not fullfilled")
            }
        }, 3000);
    })
}
logger.info('calling fun2()')
function fun2(){
 return func1().then(function(){
    console.log("Thanks for resolving")
    logger.info('promise has been resolved')
}).catch(data=>{
    console.log(data);
    logger.info('promise has been rejected')
    return data
})
}
fun2().then((data)=>{
    logger.info(`fun2 returned a promise with data: ${data}`)
    console.log("fun2 "+data)
})
console.log("Hello")