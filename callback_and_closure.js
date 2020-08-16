// const compose=(a,b,c)=>(data)=>a(b(c(data)));
// const multby3=(num)=>num*3;
// const multby4=(num)=>num*4;
// const multby5=(num)=>num*5;

// const getnum = compose(multby5,multby4,multby3);
// console.log(getnum(1));

function compose(a,b,c){
    return function(data){
        return a(b(c(data)));
      }
    }
const multby3=(num)=>num*3;
const multby4=(num)=>num*4;
const multby5=(num)=>num*5;
const getnum = compose(multby5,multby4,multby3);
console.log(getnum(1));