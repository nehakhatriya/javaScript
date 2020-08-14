var myVar = 100;
function WhoIsThis() {
    this.myVar = 200;
}
var obj1 = new WhoIsThis();
var obj2 = new WhoIsThis();
obj2.myVar = 300;
console.log(this.myVar);
console.log(obj1.myVar);
console.log(obj2.myVar); 