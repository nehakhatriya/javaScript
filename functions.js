//let array=[10,20,30,40,50];
function linearSearch(arr,key){
   for(let i=0;i<5;i++)
   {
       if(arr[i]==key)
       {
          return i+1;
       }
   }
   return "not found";
}
//console.log(linearSearch(array,30));

module.exports=linearSearch
