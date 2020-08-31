function add(a,b){
    return pub={result(){
     var c=a+b;
     a++;b++;
     console.log(c);
    }
}
}
var con=add(2,3);
con.result();
con.result();

