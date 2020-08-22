// function *example(){
//     let x=2;let y=3
//     x= yield x*y
//     x++
//     x=yield x + 3
//     return x
// }
// let it = example();
// console.log(it.next())
// console.log(it.next(11))
// console.log(it.next(5))

function *something(){
    var nextval
 while(true)
 {
     if(nextval==undefined)
        nextval=1
     else
        nextval+=3

    yield nextval
 }
}
let it= something()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)

// for(let it of something()){
//     console.log(it)
//     if(it>30)
//     break;
// }