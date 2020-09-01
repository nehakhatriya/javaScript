//let array=[10,20,30,40,50];
function linearSearch(arr, key) {
  
      try {
         arr.forEach(element => {
            console.log(typeof element)
            if (typeof element === "string") 
               throw "error"
           
         });
         for (let i = 0; i < 5; i++) {
          if (arr[i] == key)
               return i + 1;    
      }
   }
      catch (e) {
         return e
      }
   
   return "not found";
}
module.exports = linearSearch
