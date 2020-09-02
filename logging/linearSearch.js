//let array=[10,20,30,40,50];
const logger=require('./logger')
function linearSearch(arr, key) {
    logger.linear.info(`linear Search for element ${key} in array ${arr} `)
    try {
       arr.forEach(element => {
          if (typeof element === "string" || typeof element ==="null") 
             throw "error"
         
       });
       for (let i = 0; i < 5; i++) {
        if (arr[i] == key)
        {    logger.linear.info(`element found at index ${i+1}`)
             return i + 1;   
        } 
    }
 }
    catch (e) {
      logger.linear.error(`${e} occured. Array input must be integet.`)
       return e
    }
 logger.linear.info('Element not found')
 return "not found";
}
//module.exports = linearSearch

console.log(linearSearch([10,"neha",30,40],30))
console.log(linearSearch([10,20,30,40],30))
console.log(linearSearch([10,20,50,40],30))
