let mymap= new Map();
let key2={},key3 = function(){}
//setting map values
mymap.set('mystr',"this is a string")
mymap.set(key2,"this is a blank object")
mymap.set(key3,"this is an empty function")
console.log(mymap)
//getting map values
console.log(mymap.get('mystr'))
console.log(mymap.get(key2))
console.log(mymap.get(key3))
//getting size of map
console.log(mymap.size)

//you can loop using for..of loop
for (let [key,value] of mymap){
    console.log(key,value)
}
for (let key of mymap.keys()){
    console.log(key)
}

//for Each
mymap.forEach((value,key)=>{
   console.log(key, value)
})

//converting map to array
const array= Array.from(mymap)
array.forEach((val)=>{
    console.log(val)
})