var array=[1,2,3,4,5];
console.log("Array iterations");
//forEach
array.forEach(foreach);
function foreach(value){
    return value*=2;
}
console.log(array);
//map()
var array2=array.map(mapfunction);
function mapfunction(value){
   return value+=1;
}
console.log(array2)
//filter
var array3= array.filter(filterfun);
function filterfun(value){
     return value>3;
}
console.log(array3)
