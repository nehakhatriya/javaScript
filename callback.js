
class Add{
    constructor(a,b){
this.a=a;
this.b=b;
}
 sum = () =>
 this.a+this.b

 sub=()=>
  this.a+this.b;

}
function add (callback)
{
    return callback()
}

const obj=new Add(2,3);
console.log(add(obj.sum));
console.log(add(obj.sub));