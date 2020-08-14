function add(a,b){
    return function result(){
     var c=a+b;
     a++;b++;
     console.log(c);
    }
}
var con=add(2,3);
con();
con();

